"use client";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { instance } from "@/lib/instance";
import { useLayoutEffect, useState } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [user, setUser] = useState({});
    useLayoutEffect(() => {
        function fetch() {
            instance
                .get("/auth/me")
                .then((data) => {
                    setUser(data.data);
                })
                .catch((error) => {});
        }
        fetch();
        return () => {
            setUser({});
        };
    }, []);
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center py-16 max-w-screen">
                <Card className="max-w-md max-h-96">
                    <CardHeader>
                        <CardTitle>
                            Need Attention
                        </CardTitle>
                        <CardDescription>
                            Your account need to Register Admin to Blockchain.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </div>
            {/* <div className="md:px-12">{children}</div> */}
        </>
    );
}
