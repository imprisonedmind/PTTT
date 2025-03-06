// app/api/admin/logout/route.ts
import { NextRequest, NextResponse } from "next/server";

// This should match the one in your login route and middleware
// In a real app, use a database or Redis
const SESSION_STORE = new Map();

export async function GET(req: NextRequest) {
  // Get the session token
  const sessionToken = req.cookies.get("adminSession")?.value;

  // If there is a session token, remove it from the store
  if (sessionToken) {
    SESSION_STORE.delete(sessionToken);
  }

  // Build an absolute URL using req.nextUrl.origin
  const loginUrl = new URL(
    `/admin/login?logged_out=true&t=${Date.now()}`,
    req.nextUrl.origin,
  );

  // Create the response with redirect
  const response = NextResponse.redirect(loginUrl);

  // Clear the cookie
  response.cookies.set({
    name: "adminSession",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0),
    sameSite: "lax",
  });

  // Add cache control headers
  response.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate");

  return response;
}
