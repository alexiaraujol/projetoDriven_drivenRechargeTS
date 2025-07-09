import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

console.log("URL do banco:", process.env.DATABASE_URL);
 
const {Pool} = pg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default db;