import { DataSource } from "typeorm";

// require("dotenv").config();
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
  entities:
    process.env.NODE_ENV === "production"
      ? ["dist/src/entities/*.js"]
      : ["src/entities/*.ts"],
  migrations:
    process.env.NODE_ENV === "production"
      ? ["dist/src/migrations/*.js"]
      : ["src/migrations/*.ts"],
});
