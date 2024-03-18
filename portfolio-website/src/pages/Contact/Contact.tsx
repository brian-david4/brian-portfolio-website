import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { titleAnim } from "./contactAnims";

const Contact = () => {
  const title = "Contact";
  const titleLetters = title.split("");
  return (
    <>
      <div className={styles.contactPage}>
        <div className={styles.contactTitle}>
          {titleLetters.map((ltr, idx) => (
            <div key={idx} className={styles.ltrWrapper}>
              <motion.span
                className={styles.letter}
                variants={titleAnim}
                initial="initial"
                animate="enter"
                custom={idx}
              >
                {ltr}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
