import { motion } from "framer-motion";
import styles from "./txtComp.module.css";
import { textEnter } from "./anims";
import { useInView } from "react-intersection-observer";

interface TextComponentProps {
  children: string;
  hoverWords?: string[];
}

const TextComponent = ({ children, hoverWords }: TextComponentProps) => {
  const words = children.split(" ");
  const hoverWordsChecked = hoverWords ? hoverWords : [""];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <p ref={ref} className={styles.textWrapper}>
      {words.map((word, idx) =>
        hoverWordsChecked.includes(word) ? (
          <span className={styles.wordWrapper}>
            <motion.span
              variants={textEnter}
              custom={idx}
              initial="initial"
              animate={inView ? "enter" : ""}
              className={`${styles.word} ${
                hoverWordsChecked.includes(word) ? styles.hoverWord : ""
              }`}
              key={`txt_wrd${idx}`}
            >
              {word}
            </motion.span>
          </span>
        ) : (
          <span className={styles.wordWrapper}>
            <motion.span
              variants={textEnter}
              custom={idx}
              initial="initial"
              animate={inView ? "enter" : ""}
              className={styles.word}
              key={`txt_wrd${idx}`}
            >
              {word}
            </motion.span>
          </span>
        )
      )}
    </p>
  );
};

export default TextComponent;
