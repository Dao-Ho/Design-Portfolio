"use client";
import React from "react";
import { useGlobal } from "../context-providers/global-provider";

import MobileNav from "./components/mobile-nav";
import FrontPage from "./components/front-page";
import ExperiencePage from "./components/experience";
import GlobalDock from "./components/global-dock";

export default function Home() {
    const { isLight, isMobile, toggleTheme } = useGlobal();

    if (isMobile === null) return null;

    return (
        <div
            id="mainPage"
            className={`min-h-screen w-full bg-background transition-colors duration-300 ${isLight ? "light" : "dark"}`}
        >
            {isMobile && <MobileNav isLight={isLight} toggleTheme={toggleTheme} />}
            {/* Sections stay in normal flow so the page grows with its content
                and the document does the scrolling. */}
            <main className="relative z-20 flex flex-col">
                <FrontPage isLight={isLight} />
                <ExperiencePage isLight={isLight} />
            </main>
            {!isMobile && <GlobalDock isLight={isLight} toggleTheme={toggleTheme} />}
        </div>
    );
}
