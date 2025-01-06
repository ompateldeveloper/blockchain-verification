import { prisma } from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const employee = await prisma.empData.findUnique({
        where: {
            empId: id,
        },
        select: {
            empHash: true,
            adminId: true,
        },
    });
    const company = await prisma.adminUsers.findUnique({
        where: {
            id: employee?.adminId,
        },
        select: {
            companyName: true,
            companyWebsite: true,
            companyEmail: true,
            companyLogo: true,
            companySign: true,
        },
    });
    const template = await prisma.templates.findFirst({
        where: {
            adminId: employee?.adminId,
        },
        select: {
            title: true,
            content1: true,
            content2: true,
            date: true,
            cid: true,
            footer: true,
        },
    });

    return NextResponse.json({ data: { ...template, ...company, ...employee } });
}
