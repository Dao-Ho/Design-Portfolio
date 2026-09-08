"use client";
import { motion } from "framer-motion";
import { useGlobal } from "../../context-providers/global-provider";
import GitHubContributions from "./contribution-graph";
import { useRouter } from "next/navigation";
import Cited from "./citation";

const FrontPage = ({ isLight }: { isLight: boolean }) => {
    const { isMobile } = useGlobal();

    if (isMobile === null) return null;
    return isMobile ? mobilePage() : desktopPage({ isLight: isLight });
};

const desktopPage = ({ isLight }: { isLight: boolean }) => {
    const CURRENT_EXPERIENCE = "Generate";
    const CURRENT_EXPERIENCE_URL = "https://generatenu.com/";
    return (
        <div className="flex flex-col h-[85vh] bg-transparent w-[100vw] px-[20vw] text-foreground">
            <div className="h-full w-full mt-40 flex flex-col">
                <motion.div
                    className="cited-prose leading-[3vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <h1 className="font-roboto text-[18px] ">Xin chào, I'm Dao.</h1>
                    <h1 className="font-roboto text-[18px] ">
                        I'm a Software Engineer passionate about building the future.
                    </h1>
                    <h1 className="font-roboto text-[18px] ">
                        Previously @{" "}
                        <Cited source="google" isLight={isLight}>
                            Google
                        </Cited>
                        ,{" "}
                        <Cited source="agency" isLight={isLight}>
                            Agency
                        </Cited>
                        ,{" "}
                        <Cited source="designai" isLight={isLight}>
                            DesignAI
                        </Cited>
                        ,{" "}
                        <Cited source="paynalli" isLight={isLight}>
                            Paynalli
                        </Cited>
                        , and{" "}
                        <Cited source="khoury" isLight={isLight}>
                            Khoury
                        </Cited>
                        .
                    </h1>
                    <h1 className="font-roboto text-[18px] ">Northeastern '27, Computer Science and Finance.</h1>
                    <h1 className="font-roboto text-[18px] ">
                        Currently, building {/* Not a citation — this one just goes to the site, as it did before. */}
                        <a
                            href={CURRENT_EXPERIENCE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline cursor-pointer text-foreground hover:text-text-hover"
                        >
                            @{CURRENT_EXPERIENCE}
                        </a>
                    </h1>
                </motion.div>
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                >
                    <GitHubContributions userName="Dao-Ho" isLight={isLight} />
                </motion.div>
            </div>
        </div>
    );
};

const mobilePage = () => {
    const router = useRouter();
    const CURRENT_EXPERIENCE_URL = "https://www.google.com/";
    const CURRENT_EXPERIENCE = "Google";
    return (
        <div className="flex flex-col bg-transparent w-[100vw] text-foreground px-6 pt-[15vh] pb-8">
            <p className="font-inter text-[15px] leading-relaxed mb-3">
                <span className="opacity-60">Xin chào, I&apos;m </span>
                <strong className="opacity-70">Dao</strong>
                <span className="opacity-60">.</span>
            </p>
            <p className="font-inter text-[15px] leading-relaxed mb-3">
                <span className="opacity-60">I&apos;m a </span>
                <strong className="opacity-70">Software Engineer</strong>
                <span className="opacity-60"> passionate about building the future.</span>
            </p>
            <p className="font-inter text-[15px] leading-relaxed mb-3">
                <strong className="opacity-70">Northeastern &apos;27</strong>
                <span className="opacity-60">, Computer Science and Finance.</span>
            </p>
            <p className="font-inter text-[15px] leading-relaxed" onClick={() => router.push(CURRENT_EXPERIENCE_URL)}>
                <span className="opacity-60">Currently, building </span>
                <strong className="opacity-70 underline cursor-pointer hover:text-[#3c7cff] transition-colors">
                    @{CURRENT_EXPERIENCE}
                </strong>
            </p>
        </div>
    );
};

export default FrontPage;
