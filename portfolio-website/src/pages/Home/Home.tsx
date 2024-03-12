import { motion } from "framer-motion";
import styles from "./home.module.css";
import { titleWordsAnim } from "./homeAnims";

const Home = () => {
  const title =
    "React developer with enthusiasm for design and creating simple yet beautiful websites.";
  const titleWords = title.split(" ");
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>
            {titleWords.map((word, idx) => (
              <div className={styles.wordWrapper}>
                <motion.div
                  variants={titleWordsAnim}
                  initial="initial"
                  animate="enter"
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
      </div>
    </>
  );
};

export default Home;
