import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { getToken, verifyToken } from "@/lib/jwt";
import { log } from "console";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;

    try {
        const employees = await prisma.empData.findMany({
            skip,
            take: limit,
            orderBy: { startDate: "desc" },
        });

        const total = await prisma.empData.count();

        return NextResponse.json({
            data: employees,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        });
    } catch (error) {
        console.error("Error fetching employees:", error);
        return NextResponse.json({ error: "Error fetching employees" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { empId, fname, mname, lname, email, pfNumber, phone, startDate, endDate, department, designation, salary } = await request.json();
        const adminId = await getToken()

        // Validate required fields
        if (!empId || !fname || !lname || !startDate || !adminId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Create new employee
        const newEmployee = await prisma.empData.create({
            data: {
                empId,
                fname,
                mname,
                lname,
                email,
                pfNumber,
                phone,
                startDate: new Date(startDate),
                endDate: endDate ? new Date(endDate) : null,
                department,
                designation,
                salary: salary ? parseInt(salary) : null,
                admin: { connect: { id: adminId } },
            },
        });

        return NextResponse.json({ data: newEmployee }, { status: 201 });
    } catch (error) {
        console.error("Error creating employee:", error);
        return NextResponse.json({ error: "Error creating employee" }, { status: 500 });
    }
}
