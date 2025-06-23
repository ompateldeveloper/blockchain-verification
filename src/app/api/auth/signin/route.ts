import { NextResponse, type NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // Find user by email
        const user = await prisma.adminUsers.findUnique({ where: { email } });

        if (!user) {
            return NextResponse.json({ message: "Email Or Password is Incorrect" }, { status: 401 });
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: "Password is Incorrect" }, { status: 401 });
        }

        // Generate JWT
        const token = signToken({ userId: user.id, isAdmin: true });

        // Set cookies
        const response = NextResponse.json({ message: "Signin Successful" });
        response.cookies.set("token", token, { httpOnly: true, secure: false, sameSite: "lax" });
        return response;
    } catch (error) {
        console.error("Signin error:", error);
        return NextResponse.json({ message: "Internal server error in Sign-in", error }, { status: 500 });
    }
}
