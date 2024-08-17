import { z } from 'zod';

export const zUser = z.object({
  id: z.number(),
  userName: z.string(),
  totalPoint: z.number(),
  country: z.string(),
});

export type User = z.infer<typeof zUser>;

export const zCategory = z.object({
  id: z.number(),
  categoryName: z.string(),
  blitzTime: z.number(),
  description: z.string(),
});

export type Category = z.infer<typeof zCategory>;

export const zQuestion = z.object({
  id: z.number(),
  categoryId: z.number(),
  title: z.string(),
  correctAnswer: z.number(),
});

export type Question = z.infer<typeof zQuestion>;

export const zOption = z.object({
  id: z.number(),
  questionId: z.number(),
  answer: z.string(),
});

export type Option = z.infer<typeof zOption>;
