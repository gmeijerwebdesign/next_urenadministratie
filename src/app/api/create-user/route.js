import { connectToDB } from "@/app/lib/db";

export async function POST(req) {
  const body = await req.json();
  const { gebruikersnaam, wachtwoord, achternaam, email, functienaam } = body;

  if (!gebruikersnaam || !wachtwoord || !email || !functienaam) {
    return new Response("Verplichte velden ontbreken", { status: 400 });
  }

  try {
    const db = await connectToDB();

    await db.query`
      INSERT INTO tbl_Medewerkers 
      (INLOG_GEBRUIKERSNAAM, INLOG_WACHTWOORD, ACHTERNAAM, EMAILADRES, FUNCTIENAAM)
      VALUES (${gebruikersnaam}, ${wachtwoord}, ${achternaam}, ${email}, ${functienaam})
    `;

    return new Response("Gebruiker toegevoegd", { status: 201 });
  } catch (error) {
    console.error("Fout bij toevoegen gebruiker:", error);
    return new Response("Server error", { status: 500 });
  }
}
