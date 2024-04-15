import { AnimatePresence, motion } from "framer-motion";
import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const color2 = "#ffe600";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={inView ? { backgroundColor: color2 } : ""}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        className={styles.pageWrapper}
      >
        <div className={styles.page1}>
          <p>
            I enjoy the challenge of materialising an idea into a fully formed
            experience, I love being creative.
          </p>
        </div>
        <div ref={ref} className={styles.page2}>
          <a href="mailto:bdavid1530@gmail.com">bdavid1530@gmail.com</a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
