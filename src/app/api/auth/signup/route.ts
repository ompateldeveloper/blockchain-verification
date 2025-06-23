import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    // signupSchema.parse(await request.json())
    try {
        const { email, password, fname, lname } = await request.json();

        // Check if user already exists
        const existingUser = await prisma.adminUsers.findFirst({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await prisma.adminUsers.create({
            data: {
                email,
                password: hashedPassword,
                fname,
                lname,
            },
        });

        // Generate JWT
        const token = signToken({ userId: newUser.id, isAdmin: true });

        // Set cookies
        const response = NextResponse.json({ message: "User created successfully" }, { status: 201 });
        response.cookies.set("token", token, { httpOnly: true, secure: false, sameSite: "lax" });
        return response;
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
