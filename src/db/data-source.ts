import "reflect-metadata";
import { DataSource } from "typeorm";
import { Producto, User } from "./../entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Producto],
  migrations: [],
  subscribers: [],
});
