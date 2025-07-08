import { connectToDB } from "@/app/lib/db";

export async function GET(request) {
  try {
    const db = await connectToDB();
    const result = await db.query("SELECT * FROM tbl_MEDEWERKERS");
    return new Response(JSON.stringify(result.recordset), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Error fetching data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
