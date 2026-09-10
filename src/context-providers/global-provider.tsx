"use client";

import React, { createContext, useContext, useState, useLayoutEffect, useEffect } from "react";

interface GlobalContextType {
    isMobile: boolean | null;
    isLight: boolean;
    toggleTheme: () => void;
}

/*
 * The one definition of "mobile" in the app. Anything that branches on viewport
 * reads `isMobile` from this provider rather than measuring window.innerWidth
 * itself, so two sections can never disagree about which layout they are in.
 *
 * This is Tailwind's `lg` breakpoint. It MUST stay the exact complement of the
 * prefix `Container` uses for its desktop gutter (`lg:`) — if the two flip at
 * different widths, one viewport band renders the mobile layout with desktop
 * gutters. Change both or neither.
 */
export const MOBILE_BREAKPOINT_PX = 1024;
export const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`;

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [isLight, setIsLight] = useState<boolean>(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "light") setIsLight(true);
    }, []);

    const toggleTheme = () => {
        setIsLight((v) => {
            const next = !v;
            localStorage.setItem("theme", next ? "light" : "dark");
            return next;
        });
    };

    useLayoutEffect(() => {
        const query = window.matchMedia(MOBILE_QUERY);
        const update = () => setIsMobile(query.matches);

        update();
        query.addEventListener("change", update);

        return () => {
            query.removeEventListener("change", update);
        };
    }, []);

    return <GlobalContext.Provider value={{ isMobile, isLight, toggleTheme }}>{children}</GlobalContext.Provider>;
};

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobal must be used within an GlobalProvider");
    }
    return context;
};
