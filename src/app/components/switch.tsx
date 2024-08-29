"use client";

import React from "react";

export default function Switch({ isChecked, onChange }) {
    return (
      <div 
        className={`inline-flex flex min-w-[5vh] items-center cursor-pointer w-[3vw] h-[3vh] border-[0.15vw] rounded-full ${isChecked ? 'bg-dark-background' : 'bg-light-background'} border ${isChecked ? 'border-light-background' : 'border-light-foreground'} transition-colors duration-300`}
        onClick={onChange}
      >
        <span 
          className={` w-[0.95vw] min-w-[2vh] min-h-[2vh] h-[0.95vw] ml-[0.25vw] rounded-full transition-transform duration-300 border ${isChecked ? 'transform translate-x-[1.25vw] bg-light-background border-light-background' : 'transform translate-x-0 bg-dark-background border-dark-background'}`} 
        />
      </div>
    );
  }

