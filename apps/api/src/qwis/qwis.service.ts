import { Inject, Injectable } from '@nestjs/common';
import { dbAsyncProvider } from 'db/db.provider';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import { users } from 'db/schema';
import * as schema from 'db/schema';

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
}
