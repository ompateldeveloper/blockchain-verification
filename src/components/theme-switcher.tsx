"use client";

import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    return (
        <Tabs value={theme} onValueChange={setTheme} className="m-1">
            <TabsList>
                <TabsTrigger value="system" className="flex items-center gap-2">
                    <Monitor className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="light" className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                </TabsTrigger>
                <TabsTrigger value="dark" className="flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
