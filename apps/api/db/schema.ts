import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  userName: text('user_name'),
  totalPoint: integer('total_point'),
  country: text('country'),
});

export const category = sqliteTable('category', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  categoryName: text('category_name'),
  blitzTime: integer('blitz_time'),
  description: text('description'),
});

export const question = sqliteTable('question', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  categoryId: integer('category_id'),
  title: text('question_title'),
});

export const option = sqliteTable('option', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  questionId: integer('question_id'),
  answer: text('answer'),
  correctAnswer: integer('correct_Answer', { mode: 'boolean' }),
});
