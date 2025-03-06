// app/admin/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check session status on mount
    checkSessionStatus();
  }, []);

  async function checkSessionStatus() {
    try {
      const res = await fetch("/api/admin/validate-session", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        // If session is invalid, redirect to login
        window.location.href = `/admin/login?invalid=true&t=${Date.now()}`;
        return;
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error validating session:", error);
      // On error, redirect to login
      window.location.href = `/admin/login?error=true&t=${Date.now()}`;
    }
  }

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/admin/logout", {
        method: "GET",
        cache: "no-store",
      });

      // Force a hard redirect
      window.location.href = `/admin/login?logged_out=true&t=${Date.now()}`;
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Only visible if you are logged in as admin.</p>
      {/* This is where you'd fetch and display your user subscription table */}

      <button onClick={handleLogout} disabled={isLoading}>
        {isLoading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
}
