"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LandingScreen() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (session) {
  //     axios
  //       .get("/api/data")
  //       .then((response) => setData(response.data))
  //       .catch((error) => console.error(error));
  //   }
  // }, [session]);

  // if (status === "loading") return <p>Loading...</p>;
  // if (!session) return null; // zolang er nog geen sessie is, niks tonen

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Database Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="mb-2">
            {item.INLOG_GEBRUIKERSNAAM}
          </li>
        ))}
      </ul>
    </div>
  );
}
