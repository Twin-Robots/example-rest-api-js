import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PostService } from './services/PostService';
import prisma from './lib/prisma';

dotenv.config();

const app: Express = express();
const postService = new PostService(prisma);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/hello-world', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.get('/posts/:slug', async (req: Request, res: Response) => {
  const post = await postService.getPost(req.params.slug);
  res.json(post);
});

app.post('/posts', async (req: Request, res: Response) => {
  const post = await postService.createPost(req.body);
  res.json(post);
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app; 
