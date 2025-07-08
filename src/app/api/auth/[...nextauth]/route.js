import { connectToDB } from "@/app/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// ...
async function checkUserInDB(credentials) {
  try {
    const db = await connectToDB();

    const result = await db.query`
      SELECT * FROM tbl_Medewerkers
      WHERE INLOG_GEBRUIKERSNAAM = ${credentials.name} AND INLOG_WACHTWOORD = ${credentials.password}
    `;

    const user = result.recordset[0];
    if (user) {
      return {
        id: user.MEDEWERKER_ID,
        name: user.INLOG_GEBRUIKERSNAAM,
      };
    }
    return null;
  } catch (error) {
    console.error("Login DB fout:", error);
    return null;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: checkUserInDB,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
