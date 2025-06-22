"use client";
import { Blocks } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import useUserStore from "@/store/useUserStore";
import ThemeSwitcher from "./theme-switcher";

function ActiveLink({ href, children }: LinkProps & { children: React.ReactNode }) {
    const pathname = usePathname();
    return (
        <Link href={href} className={` ${pathname === href ? "underline" : ""}`}>
            {children}
        </Link>
    );
}
export default function Navbar() {
    const router = useRouter();
    const signout = () => {
        router.push("/signout");
    };
    const { fname, lname } = useUserStore();
    return (
        <div className="w-full h-14 md:px-12 flex items-center justify-between bg-zinc-50 dark:bg-zinc-800 ">
            <div className="flex items-center justify-center gap-4">
                <div className="font-semibold flex items-center gap-2 text-nowrap">
                    <Blocks />
                    Employee Verification
                </div>
                <div className="text-sm flex gap-2 ">
                    <ActiveLink href={"/admin/dashboard"}>Dashboard</ActiveLink>
                    <ActiveLink href={"/admin/template"}>Template</ActiveLink>
                    <ActiveLink href={"/admin/employees"}>Employees</ActiveLink>
                </div>
            </div>
            <div className="">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback>
                                {fname?.slice(0, 1)}
                                {lname?.slice(0, 1)}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500 dark:text-red-600 " onClick={signout}>
                            Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
