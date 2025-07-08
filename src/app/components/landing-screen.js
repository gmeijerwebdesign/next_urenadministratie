"use client";
import { useSession } from "next-auth/react";
import SideBar from "./sidebar";
import Main from "./main";
import Admin from "./admin"; // ← Zorg dat je een Admin component hebt
import { useState } from "react";

export default function LandingScreen() {
  const { data: session } = useSession();
  const [currentNav, setCurrentNav] = useState("home");

  const handleNavigation = (nav) => {
    setCurrentNav(nav.toLowerCase());
  };

  return (
    <div className="flex">
      <SideBar session={session} onNavigate={handleNavigation} />
      <Main name={session?.user?.name || "Gebruiker"} currentNav={currentNav} />
    </div>
  );
}
