import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
dotenv.config();
console.log(process.env.DATABASE_URL!);

async function testConnection() {
  try {
    const db = drizzle(process.env.DATABASE_URL!);
    console.log("✅ Database connected successfully!");
    // You can add a sample query to test:
    // await db.select().from(usersTable); // Assuming your schema is imported
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
  }
}

testConnection();