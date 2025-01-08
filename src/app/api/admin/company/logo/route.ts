import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "@/lib/jwt";
import { pinata } from "@/lib/pinata";

// Initialize Pinata client

export const config = {
    api: {
        bodyParser: false,
    },
};
export async function POST(req: NextRequest) {
    if (!req.body) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }


    try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    console.log("Uploading to Pinata...");
    const uploadResult = await pinata.upload.file(file);

    const id = await getToken();

    const url = `https://${process.env.PINATA_URL}/ipfs/${uploadResult.IpfsHash}`;
    await prisma.adminUsers.update({
        where: {
            id,
        },
        data: {
            companyLogo: url,
        },
    });
    console.log("Upload successful:", uploadResult);
    return NextResponse.json({
        success: true,
        ipfsHash: uploadResult.IpfsHash,
        url,
        pinSize: uploadResult.PinSize,
        timestamp: uploadResult.Timestamp,
    });
    } catch (error) {
        console.error("Error uploading to Pinata:", error);
        return NextResponse.json({ error: "Error uploading to Pinata" }, { status: 500 });
    }
}
