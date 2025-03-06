// app/api/admin/debug/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Get all cookies
  const cookies = req.cookies.getAll();

  return NextResponse.json({
    cookies: cookies.map((c) => ({
      name: c.name,
      value: c.name === "adminSession" ? c.value : "[REDACTED]",
      path: c.path,
      expires: c.expires,
    })),
    url: req.url,
    timestamp: new Date().toISOString(),
  });
}
