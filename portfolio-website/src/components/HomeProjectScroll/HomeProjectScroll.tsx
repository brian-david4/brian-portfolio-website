import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./hps.module.css";
import { useRef } from "react";

interface HomeProjectScroll {
  title: string;
}

const HomeProjectScroll = ({ title }: HomeProjectScroll) => {
  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start 0.95", "start -0.1"],
  });
  const position = useTransform(scrollYProgress, [0, 1], ["-70%", "5%"]);

  return (
    <>
      <div ref={projectRef} className={styles.project}>
        <motion.div style={{ x: position }} className={styles.titlesContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h1 className={styles.title}>{title}</h1>
          <h1 className={styles.title}>{title}</h1>
        </motion.div>
      </div>
    </>
  );
};

export default HomeProjectScroll;
