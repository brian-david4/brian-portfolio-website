import { motion } from "framer-motion";
import styles from "./txtComp.module.css";
import { textEnter } from "./anims";
import { useInView } from "react-intersection-observer";
import TextHover from "../TextHover/TextHover";
import { TextHoverType } from "../../types";

interface TextComponentProps {
  children: string;
  hoverWords?: TextHoverType;
}

const TextComponent = ({ children, hoverWords }: TextComponentProps) => {
  const words = children.split(" ");
  const defaultHoverWords: TextHoverType = {
    selectedWords: [""],
    images: [""],
  };
  const hoverWordsNotUndefined = hoverWords ? hoverWords : defaultHoverWords;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <p ref={ref} className={styles.textWrapper}>
      {words.map((word, idx) =>
        hoverWordsNotUndefined.selectedWords.includes(word) ? (
          <span className={styles.wordWrapper}>
            <TextHover images={hoverWordsNotUndefined.images}>{word}</TextHover>
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
