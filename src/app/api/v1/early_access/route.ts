import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { user_email }: { user_email: string } = await req.json();
  try {
    const __db_response = await prisma.earlyAccess.create({
      data: {
        user_email: user_email,
      },
    });
    return NextResponse.json(
      {
        created_at: __db_response.created_at,
      },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Already joined for early access" },
      { status: 409 },
    );
  }
}
