"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

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
