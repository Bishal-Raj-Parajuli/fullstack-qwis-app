import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config();

if (!('DB_URL' in process.env))
  throw new Error('DB_URL not found on .env.development');

export default defineConfig({
  dialect: 'sqlite',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: 'database.db',
  },
});
