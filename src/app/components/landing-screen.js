"use client";
import { useSession } from "next-auth/react";
import SideBar from "./sidebar";
import Main from "./main";

export default function LandingScreen() {
  const { data: session } = useSession();

  return (
    <div className="flex ">
      <SideBar />
      <Main name={session?.user?.name || "Gebruiker"} />
    </div>
  );
}
