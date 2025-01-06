"use client";
import { instance } from "@/lib/instance";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    instance
        .get("/auth/signout")
        .then((response) => {
            router.push("/signin");
        })
        .catch((error) => {
            console.log(error);
        });
}
