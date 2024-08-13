import { z } from 'zod';

export const zUser = z.object({
  id: z.string().uuid(),
  userName: z.string(),
  totalPoint: z.number(),
  country: z.string(),
});

export const zCategory = z.object({
  id: z.string().uuid(),
  categoryName: z.string(),
  blitzTime: z.number(),
  description: z.string(),
});

export const zQuestion = z.object({
  id: z.string().uuid(),
  categoryId: z.string().uuid(),
  title: z.string(),
  correctAnswer: z.string().uuid(),
});

export const zOption = z.object({
  id: z.string().uuid(),
  questionId: z.string().uuid(),
  answer: z.string(),
});
