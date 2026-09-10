"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SOURCES, entrySlug } from "../data/sources";

const OPEN_DELAY = 55;
const CLOSE_DELAY = 30;
const CARD_W = 382; // wide enough that the longest source name clears the date
const MARK_PX = 30;

/** The source's favicon, or its initial when there isn't one to vendor. */
const Mark = ({
    icon,
    name,
    size,
    scale = 1,
    inline = false,
}: {
    icon?: string;
    name: string;
    size: number;
    scale?: number;
    inline?: boolean;
}) => (
    <span
        className={`${inline ? "inline-flex" : "flex"} shrink-0 items-center justify-center`}
        style={{
            width: size,
            height: size,
            // keeps the same corner language as the chip that holds it
            borderRadius: size >= 24 ? 8 : 4,
            // nudge onto the text's optical centre without disturbing the baseline
            verticalAlign: inline ? -2 : undefined,
            marginRight: inline ? 4 : undefined,
            background: icon ? undefined : "color-mix(in srgb, var(--foreground-color) 12%, transparent)",
            // the box is fixed either way, so an over-scaled mark spills into the
            // chip's padding instead of changing the layout
            overflow: icon ? "visible" : "hidden",
        }}
    >
        {icon ? (
            <Image src={icon} alt="" width={Math.round(size * scale)} height={Math.round(size * scale)} unoptimized />
        ) : (
            <span className="opacity-60" style={{ fontSize: Math.round(size * 0.64), lineHeight: 1 }}>
                {name.charAt(0)}
            </span>
        )}
    </span>
);

/**
 * An @-mention in the prose, set as a pill rather than an underline. The card
 * reads header / title / body: where the work was, what the role was, and one
 * line on it. It identifies the source, it doesn't reproduce it — clicking
 * lands on the full entry.
 */
const Cited = ({
    source,
    children,
    isLight,
    onJump,
}: {
    source: string;
    children: React.ReactNode;
    isLight: boolean;
    /** Optional override; by default the mention scrolls to its entry itself. */
    onJump?: (entry: string) => void;
}) => {
    const src = SOURCES[source];
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const openTimer = useRef<ReturnType<typeof setTimeout>>();
    const closeTimer = useRef<ReturnType<typeof setTimeout>>();

    const show = useCallback(() => {
        clearTimeout(closeTimer.current);
        openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY);
    }, []);

    const hide = useCallback(() => {
        clearTimeout(openTimer.current);
        closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
    }, []);

    useEffect(
        () => () => {
            clearTimeout(openTimer.current);
            clearTimeout(closeTimer.current);
        },
        []
    );

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    if (!src) return <>{children}</>;

    const activate = () => {
        setOpen(false);
        if (src.href) {
            if (src.href.startsWith("/")) router.push(src.href);
            else window.open(src.href, "_blank", "noopener");
            return;
        }
        if (!src.entry) return;
        if (onJump) {
            onJump(src.entry);
            return;
        }
        document
            .getElementById(`experience-${entrySlug(src.entry)}`)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <span
            className="relative inline-block"
            // Drives the prose dim in globals.css. Needed because :hover alone is
            // lost the moment the cursor moves onto the open card, which is a
            // descendant — the pill would stay lit while the prose snapped back.
            data-cited-open={open ? "true" : undefined}
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            <button
                type="button"
                onClick={activate}
                onFocus={show}
                onBlur={hide}
                aria-label={`${src.name}, ${src.role}`}
                // No chrome at rest — the @ is the affordance. The pill is drawn
                // only on hover/focus, and leading is set explicitly so it hugs
                // the text instead of inheriting the h1's 3vh line box. The negative
                // margin cancels most of the padding so the pill doesn't push the
                // punctuation away from each mention.
                // Vertical breathing room comes from padding cancelled by negative
                // margin, not from `leading` — the parent line-height is 3vh, so a
                // taller line box would push the prose lines apart on short viewports.
                className={`cursor-pointer inline-block align-baseline leading-[20px] py-[4px] -my-[4px] rounded-[8px] transition-[background-color] duration-150 outline-none ${
                    src.icon ? "pl-[4px] pr-[7px]" : "px-[7px]"
                } ${
                    open
                        ? "bg-[color-mix(in_srgb,var(--foreground-color)_16%,transparent)] text-foreground"
                        : "bg-[color-mix(in_srgb,var(--foreground-color)_7%,transparent)] hover:bg-[color-mix(in_srgb,var(--foreground-color)_16%,transparent)] hover:text-foreground focus-visible:bg-[color-mix(in_srgb,var(--foreground-color)_16%,transparent)] focus-visible:text-foreground"
                }`}
            >
                {src.icon && <Mark icon={src.icon} name={src.name} size={15} scale={src.iconScale} inline />}
                {children}
            </button>

            <AnimatePresence>
                {open && (
                    <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        // Leaves quicker than it arrives — a card that lingers on
                        // the way out reads as lag, not as easing.
                        exit={{ opacity: 0, y: 2, transition: { duration: 0.09, ease: "easeIn" } }}
                        transition={{ duration: 0.14, ease: "easeOut" }}
                        onClick={activate}
                        className="absolute left-0 top-full z-50 mt-[10px] flex flex-col rounded-2xl p-[18px] cursor-pointer text-foreground"
                        style={{
                            width: CARD_W,
                            background: isLight ? "#fffdfa" : "#242229",
                            border: isLight
                                ? "1px solid color-mix(in srgb, var(--foreground-color) 12%, transparent)"
                                : "none",
                            boxShadow: isLight
                                ? "0 14px 34px -14px rgba(38,37,35,0.22)"
                                : "0 18px 44px -16px rgba(0,0,0,0.45)",
                        }}
                    >
                        {/* source, with the date as right-aligned metadata — keeps it
                            out of the body copy without costing a whole row */}
                        <span className="flex items-center gap-[9px] leading-none">
                            <Mark icon={src.icon} name={src.name} size={MARK_PX} scale={src.iconScale} />
                            <span
                                className={`font-roboto text-[13px] truncate ${isLight ? "opacity-70" : "opacity-55"}`}
                            >
                                {src.name}
                            </span>
                            <span
                                className={`font-roboto text-[12px] tracking-[0.02em] ml-auto shrink-0 pl-2 ${
                                    isLight ? "opacity-60" : "opacity-40"
                                }`}
                            >
                                {src.dates}
                            </span>
                        </span>

                        {/* title */}
                        <span className="font-roboto text-[17px] leading-[22px] text-foreground mt-[14px]">
                            {src.role}
                        </span>

                        {/* body */}
                        <span
                            className={`font-roboto text-[14px] leading-[21px] mt-[10px] overflow-hidden ${
                                isLight ? "opacity-75" : "opacity-60"
                            }`}
                            style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
                        >
                            {src.summary}
                        </span>
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
};

export default Cited;
