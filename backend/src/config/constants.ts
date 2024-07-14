import dotenv from "dotenv";


dotenv.config();

export const DB_NAME = process.env["DB_NAME"] ?? "expense_tracker_db";
export const DB_USER = process.env["DB_USER"] ?? "root";
export const DB_PORT = parseInt(process.env["DB_PORT"] ?? "3306");
export const DB_HOST = process.env["DB_HOST"] ?? "localhost";


export const HOSTNAME = process.env["SERVER_HOST"] ?? "localhost";
export const PORT = parseInt(process.env["SERVER_PORT"] ?? "5000");


export const JWT_SECRET_KEY = "secret-key";
