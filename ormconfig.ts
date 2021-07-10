import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, NODE_ENV } = process.env;

const dir = NODE_ENV === "production" ? "build" : "src";

const config: ConnectionOptions = {
  type: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: NODE_ENV !== "production",
  logging: false,
  entities: [`${dir}/entity/**/*.{ts,js}`],
  migrations: [`${dir}/migration/**/*.{ts,js}`],
  subscribers: [`${dir}/subscriber/**/*.{ts,js}`],
  cli: {
    migrationsDir: `${dir}/migration`,
    entitiesDir: `${dir}/entity`,
    subscribersDir: `${dir}/subscriber`
  }
};

export = config;
