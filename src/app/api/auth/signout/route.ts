import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.json({ message: "Signout successful" });
    response.cookies.set("token", "", { expires: new Date(0) });
    response.cookies.set("admin", "", { expires: new Date(0) });
    return response;
}
