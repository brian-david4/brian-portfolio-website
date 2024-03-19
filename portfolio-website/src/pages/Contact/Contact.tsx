import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { titleAnim } from "./contactAnims";
import ContactHello from "../../components/ContactHello/ContactHello";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { useState } from "react";

const Contact = () => {
  const [isTitleHovered, setTitleHovered] = useState(false);
  const title = "Contact";
  const titleLetters = title.split("");

  return (
    <>
      <div className={styles.contactPage}>
        <ContactMouseEffect isTitleHovered={isTitleHovered} />
        <ContactHello />
        <div
          onMouseEnter={() => setTitleHovered(true)}
          onMouseLeave={() => setTitleHovered(false)}
          className={styles.contactTitle}
        >
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
