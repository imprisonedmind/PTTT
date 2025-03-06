// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This should match the one in your login route
// In a real app, use a database or Redis
const SESSION_STORE = new Map();

export function middleware(req: NextRequest) {
  // Only apply middleware to admin routes
  if (!req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // If requesting the login page, skip the auth check
  if (req.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Check for our adminSession cookie
  const sessionToken = req.cookies.get("adminSession")?.value;

  if (!sessionToken) {
    console.log("No session token found");
    return redirectToLogin(req);
  }

  // Validate the session token
  const session = SESSION_STORE.get(sessionToken);

  if (!session) {
    console.log("Session not found in store");
    return redirectToLogin(req);
  }

  // Check if session has expired
  if (session.expiresAt < Date.now()) {
    console.log("Session expired");
    SESSION_STORE.delete(sessionToken);
    return redirectToLogin(req);
  }

  // Valid session
  return NextResponse.next();
}

function redirectToLogin(req: NextRequest) {
  // Add a timestamp to prevent caching
  const loginUrl = new URL(`/admin/login?t=${Date.now()}`, req.url);
  return NextResponse.redirect(loginUrl);
}

// Define the matcher config to only run middleware on admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
