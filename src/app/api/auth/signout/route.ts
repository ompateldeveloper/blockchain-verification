import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const response = NextResponse.json({ message: "Signout successful" });
    response.cookies.set("token", "", { 
        expires: new Date(0),
        path: '/'
    });
    response.cookies.set("admin", "", { 
        expires: new Date(0),
        path: '/'
    });
    return response;
}
