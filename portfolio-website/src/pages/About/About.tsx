import { motion } from "framer-motion";
import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { useState } from "react";
import AboutFooter from "../../components/AboutFooter/AboutFooter";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  const color2 = "#ffe600";

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        animate={inView ? { backgroundColor: color2 } : ""}
        transition={{ duration: 1, ease: [0.45, 0, 0.55, 1] }}
        className={styles.pageWrapper}
      >
        <ContactMouseEffect isTitleHovered={isHovered} />
        <div className={styles.page1}>
          <p>
            I enjoy the challenge of materialising an idea into a fully formed
            experience, I love being creative.
          </p>
        </div>
        <div ref={ref} className={styles.page2}>
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.mail}
            href="mailto:bdavid1530@gmail.com"
          >
            bdavid1530@gmail.com
          </a>

          <div className={styles.footerPosition}>
            <AboutFooter inView={inView} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
