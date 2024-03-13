import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./home.module.css";
import { titleWordsAnim } from "./homeAnims";
import { useState } from "react";

const Home = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const title =
    "React developer with enthusiasm for design and creating simple yet beautiful websites.";
  const titleWords = title.split(" ");

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <>
      <div className={styles.homepage}>
        <div ref={ref} className={styles.titleWrapper}>
          <p className={styles.title}>
            {titleWords.map((word, idx) => (
              <div className={styles.wordWrapper}>
                <motion.div
                  variants={titleWordsAnim}
                  initial="initial"
                  animate={inView ? "enter" : "exit"}
                  className={styles.word}
                  key={idx}
                  custom={idx}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </p>
        </div>
        <div className={styles.contactWrapper}>
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
    </>
  );
};

export default Home;
