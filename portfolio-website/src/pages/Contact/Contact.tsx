import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { emailAnim, titleAnim } from "./contactAnims";
import ContactHello from "../../components/ContactHello/ContactHello";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { useState } from "react";

const Contact = () => {
  const [isTitleHovered, setTitleHovered] = useState(false);
  const title = "Contact";
  const titleLetters = title.split("");
  const emailTitle = "email";
  const emailLink = "bdavid1530@gmail.com";

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
        <div className={styles.emailWrapper}>
          <div className={styles.emailTitle}>
            {emailTitle.split("").map((ltr, idx) => (
              <motion.span
                custom={idx}
                className={styles.letter}
                variants={emailAnim}
                initial="initial"
                animate="enter"
                key={`eTitle_ltr${idx}`}
              >
                {ltr}
              </motion.span>
            ))}
          </div>
          <a className={styles.emailLink} href="mailto:bdavid1530@gmail.com">
            {emailLink.split("").map((ltr, idx) => (
              <motion.span
                custom={idx}
                className={styles.letter}
                variants={emailAnim}
                initial="initial"
                animate="enter"
                key={idx}
              >
                {ltr}
              </motion.span>
            ))}
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
