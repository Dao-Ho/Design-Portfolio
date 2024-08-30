"use client"
import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";

import headshot from "../../../public/portfolio-photo.png";
import arrowDown from "../../../public/icons/arrow-down.svg";
import { Link } from "react-scroll/modules"

const staggerNameItems = stagger(0.1, { startDelay: 0.15 });

const FrontPage = () => {
    const [scope, animate] = useAnimate();


    return (
        <div className="flex flex-col h-[85vh] bg-transparent w-[100vw] text-foreground ">
            <div className="flex-1 flex flex-row">
            <div className="flex-1 w-[55vw] flex flex-col font-roboto mt-[25vh] ml-[4vw]">   
                <motion.div initial={{y: 50, opacity: 0}} animate={{y:0, opacity:100}} transition={{ duration: 0.3 }}>
                    <h1 className="font-semibold text-[5vh] leading-[5vh]">Xin Chào</h1>
                </motion.div>
                <motion.div initial={{y: 50, opacity: 0}} animate={{y:0, opacity:100}} transition={{ duration: 0.3, delay:0.1 }}>
                    <h1 className="font-bold text-[15vh] leading-[15vh]">I'm Dao Ho</h1>
                </motion.div>
                <motion.div initial={{y: 50, opacity: 0}} animate={{y:0, opacity:100}} transition={{ duration: 0.3, delay:0.2 }}>
                    <h1 className="font-semibold text-[4vh] leading-[5vh]">Software Engineer, Developer, and Artist.</h1>
                </motion.div>
                <motion.div initial={{y: 50, opacity: 0}} animate={{y:0, opacity:100}} transition={{ duration: 0.3, delay:0.3 }}>
                    <h1 className="font-semibold text-[2.75vh] leading-[5vh]">Northeastern '27, BS CS and Finance</h1>
                </motion.div>
            </div>
            <motion.div initial={{y: 50, opacity: 0}} animate={{y:0, opacity:100}} transition={{ duration: 0.3, delay:0.3 }} 
            className="flex-2 relative mr-[10vw] text-[3vw] mt-[15vh] w-[25vw] h-[25vw] min-w-[40vh] min-h-[40vh] max-w-[55vh] max-h-[55vh] border-background border-[1.5vw] bg-foreground rounded-full">
                <Image src={headshot} object="cover" layout="fill" sizes="" className="rounded-full" />
            </motion.div>
            </div>
            <div className="flex flex-2 w-[10vw] translate-x-[90vw] h-[20vh]">
               
               <motion.button initial={{y: 50, opacity: 0}} animate={{y:0, opacity:100}} transition={{ duration: 0.3, delay:0.4 }} 
               onClick={() => {
                   const anchor = document.querySelector('#experience')
                   anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
               className="text-[10vw] animate-bounce h-[5vh]">🢓
               </motion.button>
           </div>
        </div>
    );
}

export default FrontPage;