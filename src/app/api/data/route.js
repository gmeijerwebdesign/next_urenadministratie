// /app/api/data/route.js

export const runtime = "nodejs";

import sql from "mssql";

// Zet hier je eigen database gegevens
const config = {
  user: "Test",
  password: "test",
  server: "85.214.243.153",
  database: "Cyclus_Data",
  options: {
    encrypt: false, // Zet op true als jouw server dat vereist
    trustServerCertificate: true, // Nodig als de SQL server een self-signed certificaat heeft
    enableArithAbort: true, // Soms nodig bij oudere databases
    multipleStatements: true, // Kan handig zijn als je complexe queries hebt
  },
};

export async function GET(request) {
  try {
    // Connectie maken
    await sql.connect(config);

    // Query uitvoeren
    const result = await sql.query("SELECT * FROM tbl_Medewerkers");

    // Resultaat terugsturen naar frontend
    return new Response(JSON.stringify(result.recordset), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Database fout", error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
