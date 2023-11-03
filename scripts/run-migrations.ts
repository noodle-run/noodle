import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "../src/db";

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🚀 Migrations ran successfully!");
  } catch (err) {
    if (err instanceof Error) {
      console.error(`🚨 Error running migrations: ${err.message}`);
    }

    process.exit(1);
  }
};

void main();
