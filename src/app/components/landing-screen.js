"use client";
import { useSession } from "next-auth/react";
import SideBar from "./sidebar";
import Main from "./main";
import { useState } from "react";

export default function LandingScreen() {
  const { data: session } = useSession();
  const [currentNav, setCurrentNav] = useState("home");

  const handleNavigation = (nav) => {
    setCurrentNav(nav);
  };

  return (
    <div className="flex">
      <SideBar session={session} onNavigate={handleNavigation} />
      <Main name={session?.user?.name || "Gebruiker"} currentNav={currentNav} />
    </div>
  );
}
