import { createPool } from "mysql2/promise";

export const sqlConnectionPool = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "productdb",
    connectionLimit: 10,
    queueLimit: 0
});