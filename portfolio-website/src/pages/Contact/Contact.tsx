import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { enterRotateLeft, enterRotateRight, linkReveal } from "./contactAnims";

const Contact = () => {
  return (
    <>
      <div className={styles.contactPage}>
        <div className={styles.topMessage}>
          <motion.div
            variants={enterRotateLeft}
            initial="initial"
            animate="enter"
            className={styles.send}
          >
            Send me an
          </motion.div>
          <motion.div
            variants={enterRotateRight}
            initial="initial"
            animate="enter"
            className={styles.email}
          >
            Email!
          </motion.div>
        </div>

        <div className={styles.emailLink}>
          <motion.div
            variants={linkReveal}
            initial="initial"
            animate="reveal"
            className={styles.emailLinkReveal}
          ></motion.div>
          <a href="mailto:bdavid1530@gmail.com" className={styles.emailInner}>
            bdavid1530@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
