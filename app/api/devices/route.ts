import { NextResponse } from "next/server";

import { devices } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: devices, count: devices.length });
}
