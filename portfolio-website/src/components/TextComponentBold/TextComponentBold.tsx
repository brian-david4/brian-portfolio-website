import { useInView } from "react-intersection-observer";
import styles from "./txtCompBld.module.css";
import { motion } from "framer-motion";
import { textEnter } from "../TextComponent/anims";

interface TextComponentBoldProps {
  children: string;
}

const TextComponentBold = ({ children }: TextComponentBoldProps) => {
  const words = children.split(" ");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <div ref={ref} className={styles.textWrapper}>
      {words.map((word, idx) => (
        <span key={`txt_wrd${idx}`} className={styles.wordWrapper}>
          <b>
            <motion.span
              variants={textEnter}
              custom={idx}
              initial="initial"
              animate={inView ? "enter" : ""}
              className={styles.word}
            >
              {word}
            </motion.span>
          </b>
        </span>
      ))}
    </div>
  );
};

export default TextComponentBold;
