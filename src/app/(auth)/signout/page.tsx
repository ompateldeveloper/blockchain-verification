"use client";
import { instance } from "@/lib/instance";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        instance
            .post("/auth/signout")
            .then(() => router.push("/signin"))
            .catch(console.error);
    }, [router]);

    return <p>Signing out...</p>; // Optional loading state
}
