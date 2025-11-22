import { DataSource } from "typeorm";
import { Resource } from "../entity/Resource";
import path from "path";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "..", "data", "db.sqlite"),
  synchronize: true, // for dev only; for production use migrations
  logging: false,
  entities: [Resource],
  migrations: [],
  subscribers: [],
});
