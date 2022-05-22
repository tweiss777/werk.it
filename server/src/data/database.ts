// import createConnection from "mysql2/promise";
import * as mysql from "mysql2/promise";
import { Sequelize } from "sequelize";
import "dotenv/config";

const dialect = "mysql";
const database = process.env.DB_NAME as string;
const user = process.env.SERVER_USER as string;
const host = process.env.SERVER_HOST as string;
const password = process.env.SERVER_PASSWORD as string;

// Connect to server and create db if not exist
const connection = await mysql.createConnection({ host, user, password });
await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);

// Connect to db with sequelize
const db = new Sequelize(database, user, password, { host, dialect });

export default db;
