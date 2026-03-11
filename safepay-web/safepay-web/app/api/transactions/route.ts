import { NextResponse } from "next/server";

import { transactions } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({ data: transactions, count: transactions.length });
}
