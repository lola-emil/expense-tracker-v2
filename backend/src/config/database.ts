import knex from "knex";
import { DB_HOST, DB_NAME, DB_PORT, DB_USER } from "./constants";

export const db = knex({
    client: "mysql",
    connection: {
        user: DB_USER,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME
    }
});