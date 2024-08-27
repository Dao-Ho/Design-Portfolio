"use client";
import { useState } from "react";
import ParticleEffect from "./components/particles";
import React from "react";
import Switch from "../components/switch";

export default function Home() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div
      className={`w-[100vw] min-h-[100vh] transition-colors duration-300 bg-background ${
        isLight ? "light" : "dark"
      }`}
    >
      <div className="absolute z-20 h-[100vh] w-[100vw]">
        
        <Switch isChecked={!isLight} onChange={toggleTheme} />
      </div>
      <div className="relative z-10">
        <ParticleEffect isLight={isLight} />
      </div>
    </div>
  );
}
