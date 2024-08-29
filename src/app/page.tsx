"use client";
import { useEffect, useState } from "react";
import ParticleEffect from "./components/particles";
import React from "react";

import { motion } from "framer-motion";

import NavBar from "./components/navBar";
import FrontPage from "./components/front-page";
import ExperiencePage from "./components/experience";

export default function Home() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  let oldScrollY = 0;

  //determines if the navbar should be shown
  const [isVisible, setIsVisible] = useState(true);

  //determines if the navbar should be shown based on direction of the mouse scroll
  const determineNavbarVisibility = () => {
    if (window.scrollY > oldScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", determineNavbarVisibility);
    return () => {
      window.removeEventListener("scroll", determineNavbarVisibility);
    };
  }, []);

  return (
    <div
      id="mainPage"
      className={`w-[100vw] min-h-[100vh] overflow-y-scroll transition-colors duration-300 bg-background ${
        isLight ? "light" : "dark"
      }`}
    >
      <div className={`flex flex-col absolute z-20 w-[100vw] items-center`}>
        {isVisible && (
          <div className={`fixed z-20`}>
            <NavBar toggleTheme={toggleTheme} isLight={isLight} />
          </div>
        )}
        <FrontPage />
        <ExperiencePage />
      </div>
      <div className="relative z-10">
        <ParticleEffect isLight={isLight} />
      </div>
    </div>
  );
}
