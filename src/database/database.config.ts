import { IDatabaseConfigAttributes } from './interfaces/dbConfig.interface';

export const databaseConfig: IDatabaseConfigAttributes = {
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'dice',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
};
