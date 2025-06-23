import { getToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";
import EmployeeExperience from "@/lib/EmployeeExperience.json"; // put ABI path right!

const SUPER_PRIVATE_KEY = process.env.SUPER_PRIVATE_KEY || "";
const NEXT_PUBLIC_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

export async function POST(request: NextRequest) {
    const req = await request.json();
    const adminId = await getToken();
    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_API_URL);
    const wallet = new ethers.Wallet(SUPER_PRIVATE_KEY, provider);
    const contract = new ethers.Contract(NEXT_PUBLIC_CONTRACT_ADDRESS, EmployeeExperience.abi, wallet);
    console.log(contract);
    try {
        await contract.registerAdmin(req.pk);
    } catch (err: any) {
        if (err.reason === "Admin is already registered") {
            // skip or handle gracefully
        } else {
            throw err;
        }
    }

    const template = await prisma.adminUsers.update({
        where: { id: adminId },
        data: { pk: req.pk },
    });

    return NextResponse.json({ data: template }, { status: 201 });
}
