import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import { contactReveal, titleWordsAnim } from "./homeAnims";
import ProjectHeading from "../../components/ProjectHeading/ProjectHeading";
import TextComponent from "../../components/TextComponent/TextComponent";
import TextPosition from "../../components/TextPosition/TextPosition";

import { TextHoverType } from "../../types";
import styles from "./home.module.css";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import ProjectContainer from "../../components/ProjectsContainer/ProjectContainer";
import Project from "../../components/Project/Project";
import { projects } from "../../data";

interface HomeProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  footerHovered: boolean;
}

const Home = ({
  handleMouseEnter,
  handleMouseLeave,
  footerHovered,
}: HomeProps) => {
  // smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.035, wheelMultiplier: 0.65 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const title =
    "React developer fashioning creative web enviroments that are simple yet elegant.";
  const titleWords = title.split(" ");

  useEffect(() => {
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const skills = [
    {
      body: ["React", "CSS modules", "TypeScript", "JavaScript"],
      heading: "Tools",
    },
    {
      body: ["GSAP", "Framer Motion", "React Router", "Axios"],
      heading: "Libraries",
    },
    {
      body: ["Vite", "Figma", "Evernote", "Git"],
      heading: "Skills",
    },
    {
      body: ["Photoshop", "CodePen", "Chrome DevTools"],
      heading: "Extra",
    },
  ];

  // for project animation
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // for text comp

  const textEffectWords: TextHoverType = {
    selectedWords: ["music,", "Cinema"],
    images: [
      ["/album/slowthai.jpg", "/album/manAlive.jpg", "/album/skepta.webp"],
      [
        "/cinema/goodfellas.jpg",
        "/cinema/kurosawa.jpg",
        "/cinema/bandBrothers.jpg",
      ],
    ],
  };

  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.pageOne}>
          <div ref={ref} className={styles.titleWrapper}>
            <div className={styles.title}>
              {titleWords.map((word, idx) => (
                <div key={`word_${idx}`} className={styles.wordWrapper}>
                  <motion.div
                    variants={titleWordsAnim}
                    initial="initial"
                    animate={inView ? "enter" : "exit"}
                    className={styles.word}
                    custom={idx}
                  >
                    {word === "creative" ||
                    word === "simple" ||
                    word === "elegant." ? (
                      <span className={styles.emphasis}>
                        <i>{word}</i>
                      </span>
                    ) : (
                      word
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.contactWrapper}>
            <motion.div
              variants={contactReveal}
              initial="initial"
              animate="enter"
              className={styles.reveal}
            />
            <div className={styles.contactTitle}>contact</div>
            <a
              className={isEmailHovered ? styles.hoveredItalic : ""}
              href="mailto:bdavid1530@gmail.com"
              onMouseEnter={() => setIsEmailHovered(true)}
              onMouseLeave={() => setIsEmailHovered(false)}
            >
              bdavid1530@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.pageTwo}>
          <div className={styles.projHeadingPos}>
            <ProjectHeading title="Projects" />
          </div>
        </div>

        <section className={styles.projectSection}>
          <ProjectContainer>
            {projects.map((prj, idx) => {
              return <Project project={prj} key={`prj_${idx}`} />;
            })}
          </ProjectContainer>
        </section>

        {/* <div className={styles.textPos}>
          <TextPosition right>
            <TextComponent hoverWords={textEffectWords}>
              I am always listening to music, if not i'm probably playing some.
              Cinema is just as essential, spanning countries and decades.
            </TextComponent>
          </TextPosition>
        </div> */}

        <HomeFooter
          footerHovered={footerHovered}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default Home;
