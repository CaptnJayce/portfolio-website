"use client";
import Button from "../components/button";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("darkMode") === "true";
        }
        return false;
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    if (!mounted) return null;

    return (
        <nav className="w-full flex pt-10 text-2xl pb-25 sm:pb-10 sm:pt-5 justify-between">
            <div className="pl-50">
                <Button href="/">Home</Button>
            </div>

            <div>
                <Button onClick={toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>
            </div>

            <div className="flex gap-10 pr-50">
                <Button href="projects">Projects</Button>
                <Button href="blogs">Blogs</Button>
            </div>
        </nav>
    );
}
