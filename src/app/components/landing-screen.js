"use client";
import { useSession } from "next-auth/react";

export default function LandingScreen() {
  const { data: session, status } = useSession();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">welkom, {session.user.name}</h1>
    </div>
  );
}
