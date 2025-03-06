// app/api/admin/check-session/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookiesList = req.cookies.getAll();

  // Return a list of all cookies for debugging
  return NextResponse.json({
    hasAdminSession: req.cookies.has("adminSession"),
    adminSessionValue: req.cookies.get("adminSession")?.value || null,
    allCookies: cookiesList.map((c) => ({
      name: c.name,
      value: c.value ? "[PRESENT]" : "[EMPTY]",
    })),
  });
}
