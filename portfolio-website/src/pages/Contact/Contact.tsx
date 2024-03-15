import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { enterRotateLeft, enterRotateRight } from "./contactAnims";

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
          <div className={styles.emailInner}>bdavid1530@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
