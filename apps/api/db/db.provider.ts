import * as Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import { config } from 'dotenv';

config();

export const dbAsyncProvider = 'DB';
export const dbProvider = [
  {
    provide: dbAsyncProvider,
    useFactory: async () => {
      const sqlite = new Database(process.env.DB_URL);
      const db = drizzle(sqlite, { schema });
      return db;
    },
    exports: [dbAsyncProvider],
  },
];
