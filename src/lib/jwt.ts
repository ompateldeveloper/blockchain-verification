import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export function signToken(payload: string | Buffer | object) {
    return jwt.sign(payload, JWT_SECRET);
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        console.log(error);
        return;
    }
}
export async function getToken() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const { userId } = (await verifyToken(String(token))) as { userId: string };
    return userId;
}
