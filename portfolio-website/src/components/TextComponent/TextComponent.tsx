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
    images: [[""]],
  };
  const hoverWordsNotUndefined = hoverWords ? hoverWords : defaultHoverWords;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <div ref={ref} className={styles.textWrapper}>
      {words.map((word, idx) =>
        hoverWordsNotUndefined.selectedWords.includes(word) ? (
          <span key={`txt_wrd${idx}`} className={styles.wordWrapper}>
            <TextHover
              arrayIndex={hoverWordsNotUndefined.selectedWords.indexOf(word)}
              images={hoverWordsNotUndefined.images}
            >
              {word}
            </TextHover>
          </span>
        ) : (
          <span key={`txt_wrd${idx}`} className={styles.wordWrapper}>
            <motion.span
              variants={textEnter}
              custom={idx}
              initial="initial"
              animate={inView ? "enter" : ""}
              className={styles.word}
            >
              {word}
            </motion.span>
          </span>
        )
      )}
    </div>
  );
};

export default TextComponent;
