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
import { signupSchema } from "@/validators/authValidators";
import { instance } from "@/lib/instance";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
type FormData = z.infer<typeof signupSchema>;

export default function Page() {
    const router = useRouter();
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data: FormData) => {
        instance
            .post("/auth/signup", data)
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
                    <CardTitle>Sign Up </CardTitle>
                    <CardDescription>Sign Up to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4 [&>*]:space-y-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="fname">
                            <Label htmlFor="fname">First Name</Label>
                            <Input {...register("fname")} />
                            <div className="text-red-500 dark:text-red-600">{errors.fname?.message}</div>
                        </div>
                        <div className="lname">
                            <Label htmlFor="lname">Last Name</Label>
                            <Input {...register("lname")} />
                            <div className="text-red-500 dark:text-red-600">{errors.lname?.message}</div>
                        </div>
                        <div className="email">
                            <Label htmlFor="email">Email</Label>
                            <Input {...register("email")} />
                            <div className="text-red-500 dark:text-red-600">{errors.email?.message}</div>
                        </div>
                        <div className="password">
                            <Label htmlFor="password">Password</Label>
                            <Input {...register("password")} />
                            <div className="text-red-500 dark:text-red-600">{errors.password?.message}</div>
                        </div>
                        {error && <div className="text-red-500 dark:text-red-600 text-center">{error}</div>}
                        <Button type="submit">Sign Up</Button>
                    </form>

                    <div className=" mt-4">
                        <span className="text-zinc-600">Already a user? </span>
                        <Link href="/signin" className="hover:underline">
                            Sign In
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
