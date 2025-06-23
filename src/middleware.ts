import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token = request.cookies.get("token");
    
    const url = request.nextUrl.clone();
    const { pathname } = request.nextUrl;
    
    if (token && (pathname === "/signin" || pathname === "/signup")) {
        url.pathname = "/admin";
        return NextResponse.redirect(url);
    }
    
    if (!token) {
        if (pathname !== "/signin" && pathname !== "/signup") {
            url.pathname = "/signin";
            return NextResponse.redirect(url);
        }
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/signin",
        "/signup",
        "/admin/:path*"],
};
