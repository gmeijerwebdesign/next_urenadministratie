// /lib/db.js
import sql from "mssql";

const config = {
  user: "Test",
  password: "test",
  server: "85.214.243.153",
  database: "Cyclus_Data",
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
