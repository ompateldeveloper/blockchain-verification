import { getToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const id = await getToken();
    const admin = await prisma.adminUsers.findUnique({ where: { id } });
    return NextResponse.json({ data: admin });
}
