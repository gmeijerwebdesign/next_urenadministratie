import { connectToDB } from "@/app/lib/db";
import { v4 as uuidv4 } from "uuid"; // voor een uniek MEDEWERKER_ID

export async function POST(req) {
  const body = await req.json();
  const {
    gebruikersnaam,
    wachtwoord,
    achternaam,
    email,
    functienaam,
    voornaam = "Voornaam",
    geslacht = "Man",
  } = body;

  if (!gebruikersnaam || !wachtwoord || !email || !functienaam) {
    return new Response("Verplichte velden ontbreken", { status: 400 });
  }

  const medewerkerId = uuidv4(); // genereer unieke ID
  const vandaag = new Date().toISOString();

  try {
    const db = await connectToDB();

    await db.query`
      INSERT INTO tbl_Medewerkers (
        MEDEWERKER_ID,
        MEDEWERKER_STATUS,
        DATUM_IN_DIENST,
        MEDEWERKER_NAAM,
        VOORNAAM,
        ACHTERNAAM,
        GESLACHT,
        E_MAILADRES_ZAKELIJK,
        E_MAILADRES_PRIVE,
        FUNCTIENAAM,
        AFDELING,
        INLOG_GEBRUIKERSNAAM,
        INLOG_WACHTWOORD,
        INLOG_LEVEL,
        INLOG_ACTIEF
      )
      VALUES (
        ${"43334"},
        ${"Actief"},
        ${vandaag},
        ${voornaam + " " + achternaam},
        ${voornaam},
        ${achternaam},
        ${geslacht},
        ${email},
        ${email},
        ${functienaam},
        ${"Algemeen"},
        ${gebruikersnaam},
        ${wachtwoord},
        ${1}, -- standaard inlog level
        ${true}
      )
    `;

    return new Response("Gebruiker toegevoegd", { status: 201 });
  } catch (error) {
    console.error("Fout bij toevoegen gebruiker:", error);
    return new Response("Server error", { status: 500, msg: error });
  }
}
