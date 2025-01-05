import { getToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const adminId = await getToken();
    const template = await prisma.templates.findFirst({
        where: {
            adminId: adminId,
        },
    });
    return NextResponse.json({ data: template }, { status: 200 });
}


export async function PUT(request: NextRequest) {
    const { name, title, content1, content2, date, cid, footer } = await request.json();
    const adminId = await getToken();
    const updatedTemplate = await prisma.templates.update({
        where: {
            adminId,
        },
        data: {
            name,
            title,
            content1,
            content2,
            date,
            cid,
            footer,
        },
    });
    return NextResponse.json({ data: updatedTemplate });
}