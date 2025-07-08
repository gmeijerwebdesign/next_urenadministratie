"use client";
import LandingScreen from "./components/landing-screen";
import ProtectedRoute from "./lib/protected-route";
export default function Index() {
  return (
    <ProtectedRoute>
      <LandingScreen />
    </ProtectedRoute>
  );
}
