import ContactMouseEffect from "../ContactMouseEffect/ContactMouseEffect";
import styles from "./hmFt.module.css";
import { motion } from "framer-motion";
import { wordEnter } from "./contactAnims";
import HomeFooterFooter from "../HomeFooterFooter/HomeFooterFooter";

interface HomeFooterProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  footerHovered: boolean;
}

const HomeFooter = ({
  handleMouseLeave,
  handleMouseEnter,
  footerHovered,
}: HomeFooterProps) => {
  const text1 = "I want to work with you!";
  const text2 = "bdavid1530@gmail.com";
  // const [contactHovered, setMouseHovered] = useState(false);
  return (
    <footer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.footer}
    >
      <div className={styles.textFlex}>
        <ContactMouseEffect isTitleHovered={footerHovered} />

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
      <HomeFooterFooter />
    </footer>
  );
};

export default HomeFooter;
