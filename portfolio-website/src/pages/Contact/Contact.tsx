import styles from "./contact.module.css";
import ContactHello from "../../components/ContactHello/ContactHello";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { motion } from "framer-motion";
import { wordEnter } from "./contactAnims";

const Contact = () => {
  const text1 = "I want to work with you!";
  const text2 = "bdavid1530@gmail.com";

  return (
    <>
      <div className={styles.contactPage}>
        <ContactMouseEffect isTitleHovered={true} />

        <div className={styles.textFlex}>
          <div className={`${styles.text1Wrapper} ${styles.textWrapper}`}>
            <p className={styles.textInner}>
              {text1.split(" ").map((ltr, idx) => (
                <motion.span
                  variants={wordEnter}
                  custom={idx}
                  initial="initial"
                  animate="enter"
                  key={`t_word_${idx}`}
                  className={styles.word}
                >
                  {ltr}
                </motion.span>
              ))}
            </p>
          </div>
          <div className={`${styles.text2Wrapper} ${styles.textWrapper}`}>
            <motion.a
              className={`${styles.textInner} ${styles.email}`}
              href="mailto:bdavid1530@gmail.com"
              variants={wordEnter}
              custom={0}
              initial="initial"
              animate="enter"
              transition={{ delay: 0.75, duration: 1.4 }}
            >
              {text2}
            </motion.a>
          </div>
        </div>

        <div className={styles.phrasesPosition}>
          <ContactHello />
        </div>
      </div>
    </>
  );
};

export default Contact;
