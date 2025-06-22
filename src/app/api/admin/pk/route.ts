import { getToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const res = await request.json();
    const adminId = await getToken();
    const template = await prisma.adminUsers.update({
        where: {
            id: adminId,
        },
        data: {
            pk: res.pk,
        },
    });
    return NextResponse.json({ data: template }, { status: 201 });
}
