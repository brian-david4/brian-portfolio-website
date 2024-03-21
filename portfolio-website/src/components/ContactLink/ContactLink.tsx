import { motion } from "framer-motion";
import styles from "./contactLink.module.css";
import { contactLinkEnter } from "./anims";

interface ContactLinkProps {
  title: string;
  link: string;
}

const ContactLink = ({ title, link }: ContactLinkProps) => {
  return (
    <>
      <div className={styles.emailWrapper}>
        <div className={styles.emailTitle}>
          {title.split("").map((ltr, idx) => (
            <motion.span
              custom={idx}
              className={styles.letter}
              variants={contactLinkEnter}
              initial="initial"
              animate="enter"
              key={`eTitle_ltr${idx}`}
            >
              {ltr}
            </motion.span>
          ))}
        </div>
        {link.includes("@") ? (
          <a className={styles.emailLink} href={`mailto:${link}`}>
            {link.split("").map((ltr, idx) => (
              <motion.span
                custom={idx}
                className={styles.letter}
                variants={contactLinkEnter}
                initial="initial"
                animate="enter"
                key={idx}
              >
                {ltr}
              </motion.span>
            ))}
          </a>
        ) : (
          <div className={styles.emailLink}>
            {link.split("").map((ltr, idx) => (
              <motion.span
                custom={idx}
                className={styles.letter}
                variants={contactLinkEnter}
                initial="initial"
                animate="enter"
                key={idx}
              >
                {ltr}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ContactLink;
