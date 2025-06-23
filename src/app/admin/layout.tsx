"use client";
import Navbar from "@/components/Navbar";
import MandateModal from "./MandateModal";
import useUserStore from "@/store/useUserStore";
import { useLayoutEffect, useState } from "react";
import { instance } from "@/lib/instance";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { Loader, Loader2 } from "lucide-react";
const queryClient = new QueryClient();
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { updateUserDetails, clearUserDetails } = useUserStore();
    const [loading, setLoading] = useState(true);
    useLayoutEffect(() => {
        async function fetch() {
            await instance
                .get("/auth/me")
                .then((data) => {
                    console.log(data.data.data);
                    setLoading(false);
                    updateUserDetails(data.data.data);
                })
                .catch((error) => {
                    setLoading(false);
                });
            setLoading(false);
        }
        fetch();
        return () => {
            clearUserDetails();
        };
    }, []);
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <>
                    <Navbar />
                    {loading && (
                        <div className="absolute bg-zinc-100 dark:bg-zinc-900 z-50 top-0 h-screen flex items-center justify-center py-16 w-screen ">
                            <Loader className="animate-spin text-black dark:text-white" />
                        </div>
                    )}
                    <MandateModal />
                    <div className="md:px-12">{children}</div>
                    <Footer />
                </>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
