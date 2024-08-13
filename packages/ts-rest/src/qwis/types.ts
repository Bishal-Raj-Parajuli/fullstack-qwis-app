import { z } from 'zod';

export const zUser = z.object({
  id: z.number(),
  userName: z.string(),
  totalPoint: z.number(),
  country: z.string(),
});

export const zCategory = z.object({
  id: z.number(),
  categoryName: z.string(),
  blitzTime: z.number(),
  description: z.string(),
});

export const zQuestion = z.object({
  id: z.number(),
  categoryId: z.number(),
  title: z.string(),
  correctAnswer: z.number(),
});

export const zOption = z.object({
  id: z.number(),
  questionId: z.number(),
  answer: z.string(),
});
