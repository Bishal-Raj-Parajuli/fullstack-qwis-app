import * as Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { config } from 'dotenv';
import { users, category, question, option } from './schema';
import dummyData from './seedData';

config();

const sqlite = new Database(process.env.DB_URL);
const db = drizzle(sqlite);

const main = async () => {
  console.log('Seed Started');
  const userData = await db.select().from(users).all();
  if (userData.length === 0) {
    await db.insert(users).values(dummyData.userData);
  }
  const categoryData = await db.select().from(category).all();

  if (categoryData.length === 0) {
    for (const cat of dummyData.category) {
      const listCategory = await db.insert(category).values(cat).returning();
      const filteredCategory = dummyData.questions.filter(
        (que) => que.categoryName === listCategory[0].categoryName,
      );
      for (const quest of filteredCategory) {
        const listQuestion = await db
          .insert(question)
          .values({
            categoryId: listCategory[0].id,
            title: quest.questionTitle,
          })
          .returning();
        for (const opt of quest.option) {
          await db.insert(option).values({
            questionId: listQuestion[0].id,
            answer: opt.answer,
            correctAnswer: opt.answer,
          });
        }
      }
    }
  }
  console.log('Seed Finished');
};

main()
  .then(() => console.log('Data Seeded Successfully'))
  .catch((err) => console.log(err));
