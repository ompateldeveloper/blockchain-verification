import React from "react";
import ThemeSwitcher from "./theme-switcher";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-50 dark:bg-zinc-800 py-4 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-between px-6">
                <p className="m-0 text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Accentiqa. All rights reserved.</p>
                <ThemeSwitcher />
            </div>
        </footer>
    );
};

export default Footer;
