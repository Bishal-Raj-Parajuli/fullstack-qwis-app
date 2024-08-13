import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  userName: text('user_name'),
  totalPoint: integer('total_point'),
  country: text('country'),
});
