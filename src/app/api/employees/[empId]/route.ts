import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//update just hash for employee
export async function GET(request: NextRequest, { params }: { params: Promise<{ empId: string }> }) {
    const empId = (await params).empId;
    
    const employee = await prisma.empData.findUnique({
        where: {
            empId,
        },
    });

    if (!employee) {
        return NextResponse.json({ message: "Employee not found" }, { status: 404 });
    }

    return NextResponse.json(employee, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ empId: string }> }) {
    const empId = (await params).empId;
    await prisma.empData.delete({
        where: {
            empId,
        },
    });
    return NextResponse.json({ message: "Employee deleted" }, { status: 200 });
}
