import * as Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { config } from 'dotenv';
import { users } from './schema';

config();

const dummyData = {
  userData: {
    userName: 'Bishal Raj Parajuli',
    totalPoint: 100,
    country: 'Nepal',
  },
};
const sqlite = new Database(process.env.DB_URL);
const db = drizzle(sqlite);

const main = async () => {
  console.log('Seed Started');
  await db.insert(users).values(dummyData.userData);
  console.log('Seed Finished');
};

main()
  .then(() => console.log('Data Seeded Successfully'))
  .catch(() => console.log('Something went wrong while seeding the database'));
