import { getToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";
export async function GET() {
    const id = await getToken();
    const company = await prisma.adminUsers.findUnique({
        where: {
            id,
        },
    });
    return NextResponse.json({ data: company }, { status: 200 });
}
export async function POST(request: NextRequest) {
    const { companyName, companyAddress, companyPhone, companyEmail, companyWebsite } = await request.json();
    const adminId = await getToken();
    if (!companyName || !companyAddress || !companyPhone || !companyEmail || !companyWebsite) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const company = (await prisma.adminUsers.update({
        where: {
            id: adminId,
        },
        data: {
            companyName,
            companyAddress,
            companyPhone,
            companyEmail,
            companyWebsite,
        },
    })) as { password?: string; id?: String };
    delete company.password;
    delete company.id;

    return NextResponse.json({ data: company }, { status: 200 });
}
