"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signinSchema } from "@/validators/authValidators";
import { instance } from "@/lib/instance";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";

type FormData = z.infer<typeof signinSchema>;

export default function Page() {
    const router = useRouter();
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(signinSchema),
    });

    const onSubmit = (data: FormData) => {
        instance
            .post("/auth/signin", data)
            .then(() => {
                router.push("/admin");
            })
            .catch((error) => {
                if (isAxiosError(error)) {
                    setError(error.response?.data.message);
                }
                console.log(error);
            });
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Sign In </CardTitle>
                    <CardDescription>Sign in to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4 [&>*]:space-y-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="email">
                            <Label htmlFor="email">Email</Label>
                            <Input {...register("email")} />
                            <div>{errors.email?.message}</div>
                        </div>
                        <div className="password">
                            <Label htmlFor="password">Password</Label>
                            <Input {...register("password")} />
                            <div>{errors.password?.message}</div>
                        </div>
                        {error && <div className="text-red-500 dark:text-red-600 text-center">{error}</div>}
                        <Button type="submit">Sign In</Button>
                    </form>
                    <div className="mt-4">
                        <span className="text-zinc-600">Not a User? </span>
                        <Link href="/signup" className="hover:underline">
                            Sign Up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
