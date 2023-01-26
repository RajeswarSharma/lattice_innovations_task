require("dotenv").config({ path: `.env.dev` });
module.exports = {
  type: "mysql",
  host: "localhost",
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  migrationsTableName: "migrations",
  entities: ["entities/**/*.js"],
  migrations: ["migrations/*.js"],
};
