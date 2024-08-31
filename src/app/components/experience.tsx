import Image from "next/image";

import { motion } from "framer-motion";
import { useRef } from "react";

import nusci from "../../../public/experience/nusci-current.png";
import paynalli from "../../../public/experience/paynalli-systems-current.png";
import neu from "../../../public/experience/NEU-current.png";
import generate from "../../../public/experience/generate-current.png";
import { useGlobal } from "../../context-providers/global-provider";

const ExperiencePage = () => {
  const scrollRef = useRef(null);
  const { isMobile } = useGlobal();

  return isMobile ? mobilePage(isMobile, scrollRef) : desktopPage(isMobile, scrollRef);
};

const desktopPage = (isMobile, scrollRef) => {
  const styles = {
    allExperiencesContainer: `flex flex-col mt-[20vh] space-y-[25vh]`,
    experienceContainer: `${isMobile? 'flex-col' : 'space-x-[12vw] flex-row' } flex items-center font-sourceSans3 `,
    parentContainer: `w-[100vw] y-overflow overflow-hidden bg-background text-foreground flex justify-center`,
    companyName: `${isMobile ? 'text-[4vw] leading-[4vw]' : 'text-[2.75vw] leading-[3vw]'} font-bold font-oswald`,
    role: "font-semibold font-oswald text-[1.5vw] leading-[2.5vw]",
    summary: "font-med text-[1.3vw] leading-[1.3vw] mt-[2vh]",
    photoContainer: `${isMobile ? 'w-[30vw] h-[33vw]' : 'w-[22vw] h-[25vw]'} relative`,
    textContainer: `${isMobile ? 'w-[40vw]' : 'w-[20vw]'} flex flex-col justify-center`,
  
    
  };
  return (
  <div className={styles.parentContainer}>
  <div className={styles.allExperiencesContainer} id="experience">
  <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
          Generate Product Development
        </h1>
        <h1 className={styles.role}>
          Software Engineer
        </h1>
        <h1 className={styles.summary}>
        </h1>
      </motion.div>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.photoContainer}
      >
        <Image src={generate} object="cover" layout="fill" sizes="" />
      </motion.div>
    </div>
    <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.photoContainer}
      >
        <Image src={paynalli} object="cover" layout="fill" sizes="" />
      </motion.div>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
          Paynalli Systems
        </h1>
        <h1 className={styles.role}>
          Software Engineer Intern
        </h1>
        <h1 className={styles.summary}>
          Working with an incredible team under the SCRUM methodology, I
          played a key role in developing, revising, and shipping software
          to production. Beyond creating an intuitive and responsive
          frontend, I experimented with and Engineered the RAG architecture
          for various embedding models and vector databases to streamline
          the recruiter-candidate search experience.
        </h1>
      </motion.div>
    </div>
    <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
          NUSci – Northeastern Science Magazine
        </h1>
        <h1 className={styles.role}>
          Junior Software Engineer
        </h1>
        <h1 className={styles.summary}>
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
        className={styles.photoContainer}
      >
        <Image src={nusci} object="cover" layout="fill" sizes="" />
      </motion.div>
    </div>
    <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.photoContainer}
      >
        <Image src={neu} object="cover" layout="fill" sizes="" />
      </motion.div>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
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
)};

const mobilePage = (isMobile, scrollRef) => {
  const styles = {
    allExperiencesContainer: `flex flex-col mt-[20vh] space-y-[25vh]`,
    experienceContainer: `${isMobile? 'flex-col' : 'space-x-[12vw] flex-row' } flex items-center font-sourceSans3 `,
    parentContainer: `w-[100vw] y-overflow overflow-hidden bg-background text-foreground flex justify-center`,
    companyName: `${isMobile ? 'text-[4vw] leading-[4vw]' : 'text-[2.75vw] leading-[3vw]'} font-bold font-oswald`,
    role: "font-semibold font-oswald text-[1.5vw] leading-[2.5vw]",
    summary: "font-med text-[1.3vw] leading-[1.3vw] mt-[2vh]",
    photoContainer: `${isMobile ? 'w-[30vw] h-[33vw]' : 'w-[22vw] h-[25vw]'} relative`,
    textContainer: `${isMobile ? 'w-[40vw]' : 'w-[20vw]'} flex flex-col justify-center`,
  
    
  };
  return (
  <div className={styles.parentContainer}>
  <div className={styles.allExperiencesContainer} id="experience">
  <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
          Generate Product Development
        </h1>
        <h1 className={styles.role}>
          Software Engineer
        </h1>
        <h1 className={styles.summary}>
        </h1>
      </motion.div>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.photoContainer}
      >
        <Image src={generate} object="cover" layout="fill" sizes="" />
      </motion.div>
    </div>
    <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.photoContainer}
      >
        <Image src={paynalli} object="cover" layout="fill" sizes="" />
      </motion.div>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
          Paynalli Systems
        </h1>
        <h1 className={styles.role}>
          Software Engineer Intern
        </h1>
        <h1 className={styles.summary}>
          Working with an incredible team under the SCRUM methodology, I
          played a key role in developing, revising, and shipping software
          to production. Beyond creating an intuitive and responsive
          frontend, I experimented with and Engineered the RAG architecture
          for various embedding models and vector databases to streamline
          the recruiter-candidate search experience.
        </h1>
      </motion.div>
    </div>
    <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
          NUSci – Northeastern Science Magazine
        </h1>
        <h1 className={styles.role}>
          Junior Software Engineer
        </h1>
        <h1 className={styles.summary}>
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
        className={styles.photoContainer}
      >
        <Image src={nusci} object="cover" layout="fill" sizes="" />
      </motion.div>
    </div>
    <div className={styles.experienceContainer}>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.photoContainer}
      >
        <Image src={neu} object="cover" layout="fill" sizes="" />
      </motion.div>
      <motion.div
        viewport={{ root: scrollRef }}
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
      >
        <h1 className={styles.companyName}>
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
)};

export default ExperiencePage;

