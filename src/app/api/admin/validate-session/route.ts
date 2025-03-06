// app/api/admin/validate-session/route.ts
import { NextRequest, NextResponse } from "next/server";

// This should match the one in your login route, logout route, and middleware
// In a real app, use a database or Redis
const SESSION_STORE = new Map();

export async function GET(req: NextRequest) {
  // Get the session token
  const sessionToken = req.cookies.get("adminSession")?.value;

  if (!sessionToken) {
    return NextResponse.json(
      { valid: false, error: "No session token" },
      { status: 401 },
    );
  }

  // Validate the session token
  const session = SESSION_STORE.get(sessionToken);

  if (!session) {
    return NextResponse.json(
      { valid: false, error: "Invalid session" },
      { status: 401 },
    );
  }

  // Check if session has expired
  if (session.expiresAt < Date.now()) {
    SESSION_STORE.delete(sessionToken);
    return NextResponse.json(
      { valid: false, error: "Session expired" },
      { status: 401 },
    );
  }

  // Valid session
  return NextResponse.json({ valid: true });
}
