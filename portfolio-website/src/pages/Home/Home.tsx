import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./home.module.css";
import { contactReveal, titleWordsAnim } from "./homeAnims";
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
                  {word}
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
    </>
  );
};

export default Home;
