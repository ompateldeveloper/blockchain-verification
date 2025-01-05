import { getToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { adjectives, animals, colors, uniqueNamesGenerator } from "unique-names-generator";
export async function POST() {
    const adminId = await getToken();
    const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    const template = await prisma.templates.create({
        data: {
            adminId,
            name: randomName,
            content1: "This is to certify that {{name}} bearing employee {{empId}}, has worked with {{companyName}} from {{startDate}} to {{endDate}}",
            content2:
                "During this period, we found him sincere, hardworking, and satisfactory. We take this opportunity to thank him for his contributions and wish him success in his future endeavors.",
            date: new Date().toDateString(),
            cid: "EXP20250102",
            title: "Certificate of Experience",
        },
    });
    return NextResponse.json({ data: template }, { status: 201 });
}

