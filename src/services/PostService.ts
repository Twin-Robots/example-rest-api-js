import { PrismaClient } from "@prisma/client";

export interface Post {
  slug: string;
  communityId: number;
  title: string;
  content: string;
}

export interface CreatePost {
  communityId: number;
  title: string;
  content: string;
}

export class PostService {

  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createPost(post: CreatePost): Promise<Post> {
    const newPost = await this.prisma.post.create({
      data: {
        slug: this.postSlugFromTitle(post.title),
        communityId: post.communityId,
        title: post.title,
        content: post.content,
      },
    });

    return {
      slug: newPost.slug,
      communityId: newPost.communityId,
      title: newPost.title,
      content: newPost.content,
    };
  }

  async getPost(slug: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: {
        slug: slug,
      },
    });
  }

  postSlugFromTitle(title: string) {
    var slug = title.toLowerCase().replace(/[^a-z0-9 ]+/g, '').replace(/^-+|-+$/g, '').replace(/[ ]/g, '_');

    slug = slug.substring(0, 23);

    var timestamp = Date.now().toString();
    slug = slug + timestamp.substring(timestamp.length - 8);

    return slug;
  }
}
