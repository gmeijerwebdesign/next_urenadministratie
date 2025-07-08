"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      name,
      password,
    });

    if (result.ok) {
      router.push("/"); // of waar je ook heen wilt
    } else {
      alert("Login mislukt");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src="/logo.png" className="max-w-[200px]" />
      <div className="flex flex-col items-center py-5 text-[#595959]">
        <p className="bold tracking-wider">Cyclus | Uren-online</p>
        <p>inlogscherm</p>
      </div>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Gebruikersnaam"
          className="auth-input-bar"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Wachtwoord"
          className="auth-input-bar"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="text-[14px] font-medium text-[#403c3c]">
            aangemeld blijven
          </span>
        </label>
        <p className="text-[12px] text-blue-700">Wachtwoord vergeten?</p>
        <button
          type="submit"
          className="border-1 border-gray-300 font-bold shadow-sm w-[300px] p-2 text-[#c0c0c0] hover:text-amber-300 hover:bg-blue-300 transition-colors duration-500"
        >
          inloggen
        </button>
      </form>
    </div>
  );
}
