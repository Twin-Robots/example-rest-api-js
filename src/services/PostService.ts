import { PrismaClient } from "@prisma/client";

export interface Post {
  id: string;
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
        externalId: this.postIdFromTitle(post.title),
        communityId: post.communityId,
        title: post.title,
        content: post.content,
      },
    });

    return {
      id: newPost.externalId,
      communityId: newPost.communityId,
      title: newPost.title,
      content: newPost.content,
    };
  }

  async getPost(id: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: {
        externalId: id,
      },
    });
  }

  postIdFromTitle(title: string) {
    var newTitle = title.toLowerCase().replace(/[^a-z0-9 ]+/g, '').replace(/^-+|-+$/g, '').replace(/[ ]/g, '_');

    newTitle = newTitle.substring(0, 23);

    var timestamp = Date.now().toString();
    newTitle = newTitle + timestamp.substring(timestamp.length - 8);

    return newTitle;
  }
}
