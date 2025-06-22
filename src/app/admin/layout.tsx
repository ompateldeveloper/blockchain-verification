"use client";
import Navbar from "@/components/Navbar";
import MandateModal from "./MandateModal";
import useUserStore from "@/store/useUserStore";
import { useLayoutEffect } from "react";
import { instance } from "@/lib/instance";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
const queryClient = new QueryClient();
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { updateUserDetails, clearUserDetails } = useUserStore();
    useLayoutEffect(() => {
        function fetch() {
            instance
                .get("/auth/me")
                .then((data) => {
                    console.log(data.data.data);

                    updateUserDetails(data.data.data);
                })
                .catch((error) => {});
        }
        fetch();
        return () => {
            clearUserDetails();
        };
    }, []);
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <QueryClientProvider client={queryClient}>
                <>
                    <Navbar />
                    <MandateModal />
                    <div className="md:px-12">{children}</div>
                    <Footer />
                </>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
