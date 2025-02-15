import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: Promise<{ empId: string }> }) {
    const empId = (await params).empId;
    const body = await request.json();
    const employee = await prisma.empData.update({
        where: {
            empId,
        },
        data: {
            ...body,
        },
    });
    return NextResponse.json({ data: employee }, { status: 200 });
}