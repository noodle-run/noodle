import type { Config } from "drizzle-kit";
import { env } from "./src/env.mjs";

export default {
  schema: "./src/db/schema/index.ts",
  driver: "turso",
  out: "migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
