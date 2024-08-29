import Image from "next/image";

import { motion } from "framer-motion";
import { useRef } from "react";

import nusci from "../../../public/experience/nusci-current.png";
import paynalli from "../../../public/experience/paynalli-systems-current.png";
import neu from "../../../public/experience/NEU-current.png";

const ExperiencePage = () => {
  const scrollRef = useRef(null);

  return (
    <div className={styles.parentContainer}>
      <div className={styles.allExperiencesContainer}>
        <div className={styles.experienceContainerLeft}>
          <motion.div
            viewport={{ root: scrollRef }}
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="relative w-[20vw] h-[20vw] font-roboto"
          >
            <Image src={paynalli} object="cover" layout="fill" sizes="" />
          </motion.div>
          <motion.div
            viewport={{ root: scrollRef }}
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center w-[20vw]"
          >
            <h1 className={styles.companyName}>
              Paynalli Systems
            </h1>
            <h1 className={styles.role}>
              Software Engineer Intern
            </h1>
            <h1 className="font-med text-[1.1vw] leading-[1.3vw] mt-[2vh]">
              Working with an incredible team under the SCRUM methodology, I
              played a key role in developing, revising, and shipping software
              to production. Beyond creating an intuitive and responsive
              frontend, I experimented with and Engineered the RAG architecture
              for various embedding models and vector databases to streamline
              the recruiter-candidate search experience.
            </h1>
          </motion.div>
        </div>
        <div className="flex flex-row items-center font-sourceSans3 space-x-[10vw]">
          <motion.div
            viewport={{ root: scrollRef }}
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center w-[20vw]"
          >
            <h1 className="font-bold font-oswald text-[2vw] leading-[2vw]">
              NUSci – Northeastern Science Magazine
            </h1>
            <h1 className={styles.role}>
              Junior Software Engineer
            </h1>
            <h1 className="font-med text-[1.1vw] leading-[1.3vw] mt-[2vh]">
              Working with an awesome team of developers, I help architect
              scalable and robust database schema, secure API endpoints,
              responsive frontend designs, and rigorous tests. Currently
              developing a revampled website to improve user experience.
            </h1>
          </motion.div>
          <motion.div
            viewport={{ root: scrollRef }}
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="relative w-[20vw] h-[20vw] font-roboto"
          >
            <Image src={nusci} object="cover" layout="fill" sizes="" />
          </motion.div>
        </div>
        <div className={styles.experienceContainerLeft}>
          <motion.div
            viewport={{ root: scrollRef }}
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="relative w-[20vw] h-[20vw] font-roboto"
          >
            <Image src={neu} object="cover" layout="fill" sizes="" />
          </motion.div>
          <motion.div
            viewport={{ root: scrollRef }}
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center w-[20vw]"
          >
            <h1 className={"font-bold font-oswald text-[2vw] leading-[2.15vw]"}>
              Northeastern University Khoury College of Computer Sciences
            </h1>
            <h1 className={styles.role}>
              Discrete Math Teaching Assistant
            </h1>
            <h1 className={styles.summary}>
              Led weekly office hours and teaching sessions to reinforce student understanding of course concepts. I provided additional resources, and comprehensive grading feedback to students on homeworks and exams to ensure success in the course.
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  allExperiencesContainer: "flex flex-col mt-[20vh] space-y-[20vh]",
  experienceContainerLeft: "flex flex-row items-center font-sourceSans3 space-x-[5vw]",
  parentContainer: "w-[100vw] y-overflow overflow-hidden bg-background text-foreground flex justify-center",
  companyName: "font-bold font-oswald text-[2vw] leading-[2vw]",
  role: "font-semibold font-oswald text-[1.5vw] leading-[2.5vw]",
  summary: "font-med text-[1.1vw] leading-[1.3vw] mt-[2vh]",

  
}

export default ExperiencePage;
