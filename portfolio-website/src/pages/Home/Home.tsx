import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import styles from "./home.module.css";
import { contactReveal, titleWordsAnim } from "./homeAnims";
import HomeProjectScroll from "../../components/HomeProjectScroll/HomeProjectScroll";
import ProjectHeading from "../../components/ProjectHeading/ProjectHeading";
import SkillsComponent from "../../components/SkillsComponent/SkillsComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import TextComponentBold from "../../components/TextComponentBold/TextComponentBold";
import { TextHoverType } from "../../types";
import TextPosition from "../../components/TextPosition/TextPosition";

const Home = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const title =
    "React developer fashioning creative web enviroments that are candid yet elegant.";
  const titleWords = title.split(" ");

  useEffect(() => {
    document.body.style.overflowY = "scroll";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const projects = [
    { title: "Kurosawa's Story -", link: "https://kurosawa-gray.vercel.app" },
    {
      title: "Furniture Store /",
      link: "https://furniture-shop-drab.vercel.app",
    },
    {
      title: "Game Hub Search *",
      link: "https://game-hub-eosin-chi.vercel.app",
    },
  ];

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
                    word === "candid" ||
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

          <div className={styles.projects}>
            {projects.map((project, idx) => (
              <HomeProjectScroll
                link={project.link}
                title={project.title}
                key={`pjt_${idx}`}
              />
            ))}
          </div>

          <div className={styles.textPos}>
            <TextPosition right>
              <TextComponent hoverWords={textEffectWords}>
                I am always listening to music, if not i'm probably playing
                some. Cinema is just as essential, spanning countries and
                decades.
              </TextComponent>
            </TextPosition>

            <TextPosition>
              <TextComponent>
                I enjoy the challenge of materialising an idea into a fully
                formed experience, I love being creative.
              </TextComponent>
            </TextPosition>

            <TextPosition>
              <TextComponentBold>What Next?</TextComponentBold>
            </TextPosition>

            <TextPosition right>
              <TextComponent>
                I am working towards learning Three.js and WebGL, whilst
                constantly improving on the fundamentals.
              </TextComponent>
            </TextPosition>
          </div>

          <div className={styles.toolsPosition}>
            {skills.map((skill, idx) => (
              <SkillsComponent
                body={skill.body}
                heading={skill.heading}
                key={`sk_${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
