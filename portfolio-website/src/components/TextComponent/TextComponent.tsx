import { motion } from "framer-motion";
import styles from "./txtComp.module.css";
import { textEnter } from "./anims";
import { useInView } from "react-intersection-observer";

interface TextComponentProps {
  children: string;
}

const TextComponent = ({ children }: TextComponentProps) => {
  const words = children.split(" ");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <p ref={ref} className={styles.textWrapper}>
      {words.map((word, idx) => (
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
      ))}
    </p>
  );
};

export default TextComponent;
