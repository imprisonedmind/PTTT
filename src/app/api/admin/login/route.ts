// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";

// In a real app, use a database. For now, we'll use this in-memory store
// This is just for demonstration - in production use Redis or a database
const SESSION_STORE = new Map();

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const hashed = process.env.ADMIN_PASSWORD_HASH;

    if (!hashed) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 },
      );
    }

    const isMatch = await bcrypt.compare(password, hashed);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generate a unique token for this session
    const sessionToken = randomBytes(32).toString("hex");

    // Store session with expiry time (24 hours from now)
    SESSION_STORE.set(sessionToken, {
      createdAt: Date.now(),
      expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    // Password matched, set a secure cookie with the token
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "adminSession",
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
