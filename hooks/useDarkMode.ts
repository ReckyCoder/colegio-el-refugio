'use client';

import { useEffect, useState } from "react";

export function useDarkMode(){
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        const root = document.documentElement;
        const isDark = root.classList.contains("dark");

        if(isDark) setDarkMode(true);
        else setDarkMode(false);
    }, []);

    const toggleDarkMode = () => {
        const root = document.documentElement;
        const isDark = root.classList.contains("dark");

        if (isDark) {
            root.classList.remove("dark");
            localStorage.setItem("isDarkMode", "false");
            setDarkMode(false)
        } else {
            root.classList.add("dark");
            localStorage.setItem("isDarkMode", "true");
            setDarkMode(true)
        }
    };

    return { darkMode, toggleDarkMode } 
}