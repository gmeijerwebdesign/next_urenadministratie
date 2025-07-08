"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // nog checken
    if (!session) router.push("/login"); // redirect als niet ingelogd
  }, [session, status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // of een spinner
  }

  if (!session) {
    return null; // nog niks renderen omdat redirect bezig is
  }

  // Als ingelogd, render de children (beveiligde content)
  return <>{children}</>;
}
