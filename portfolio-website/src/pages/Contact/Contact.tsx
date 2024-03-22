import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { titleAnim } from "./contactAnims";
import ContactHello from "../../components/ContactHello/ContactHello";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { useState } from "react";
import ContactLink from "../../components/ContactLink/ContactLink";

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
        <div className={styles.bio}>
          <div className={styles.bioMessage}>
            I want to hear from you, send me a message!
          </div>
          <div className={styles.bioHover}></div>
        </div>
        <div className={styles.linksWrapper}>
          <ContactLink title={emailTitle} link={emailLink} />
          <ContactLink title="phone" link="07838358167" />
        </div>
      </div>
    </>
  );
};

export default Contact;
