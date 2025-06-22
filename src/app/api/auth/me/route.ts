import { getToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const adminId = await getToken();
    const data = await prisma.adminUsers.findUnique({
        where:{
            id:adminId
        }
    });
    return NextResponse.json({ data });
}
