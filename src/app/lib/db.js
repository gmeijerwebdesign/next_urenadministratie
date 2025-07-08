// /lib/db.js
import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true,
    multipleStatements: true,
  },
};

// Herbruikbare functie voor connectie
export async function connectToDB() {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error("DB Connectie fout:", error);
    throw error;
  }
}
