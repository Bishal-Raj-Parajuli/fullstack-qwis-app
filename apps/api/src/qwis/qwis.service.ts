import { Inject, Injectable } from '@nestjs/common';
import { dbAsyncProvider } from 'db/db.provider';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { category, option, question, users } from 'db/schema';
import * as schema from 'db/schema';
import { User } from '@qwis/ts-rest';
import { eq } from 'drizzle-orm';

@Injectable()
export class QwisService {
  constructor(
    @Inject(dbAsyncProvider)
    private readonly db: BetterSQLite3Database<typeof schema>,
  ) {}

  async getUserList() {
    const userList = await this.db.select().from(users).all();
    return userList;
  }

  async createUser(user: Omit<User, 'id'>) {
    const arr = await this.db.insert(users).values(user).returning();
    return arr[0];
  }

  async getUserById(userId: number){
    const user = await this.db.select().from(users).where(eq(users.id, userId));
    return user[0];
  }

  async updateUser(userId: number, data: Omit<User, 'id' | 'userName' | 'country'>){
    const arr = await this.db.update(users).set(data).where(eq(users.id, userId)).returning({ userId: users.id });
    return this.getUserById(arr[0].userId)
  }

  async getCategoryList() {
    const arr = await this.db.select().from(category).all();
    return arr;
  }

  async getCategoryById(id: number) {
    const arr = await this.db
      .select()
      .from(category)
      .where(eq(category.id, id));
    return arr[0];
  }

  async getQuestionByCategoryId(id: number){
    const arr = await this.db.select().from(question).where(eq(question.categoryId, id));
    return arr;
  }

  async getOptionByQuestionId(id: number){
    const arr = await this.db.select().from(option).where(eq(option.questionId, id));
    return arr;
  }



}
