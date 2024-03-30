import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import styles from "./home.module.css";
import { contactReveal, titleWordsAnim } from "./homeAnims";
import HomeProjectScroll from "../../components/HomeProjectScroll/HomeProjectScroll";
import ProjectHeading from "../../components/ProjectHeading/ProjectHeading";

const Home = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const title =
    "React developer fashioning creative web enviroments that are candid yet elegant.";
  const titleWords = title.split(" ");

  const projects = [
    { title: "Kurosawa's Story -", link: "kurosawa-gray.vercel.app" },
    { title: "Furniture Store /", link: "furniture-shop-drab.vercel.app" },
    { title: "Game Hub Search *", link: "game-hib-eosin-chi.vercel.app" },
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // for project animation

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
              <HomeProjectScroll title={project.title} key={`pjt_${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
