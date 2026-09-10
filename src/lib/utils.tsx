import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
