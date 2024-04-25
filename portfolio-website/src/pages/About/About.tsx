import { motion } from "framer-motion";
import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { useState } from "react";
import AboutFooter from "../../components/AboutFooter/AboutFooter";
import AboutPageSection from "../../components/AboutPageSection/AboutPageSection";
import Magnetic from "../../components/Magnetic/Magnetic";
import AboutImage from "../../components/AboutImage/AboutImage";

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
          <div className={styles.page1Layout}>
            <div
              className={`${styles.page1SectionContainer} ${styles.leftContainer}`}
            >
              <AboutPageSection title="hobbies">
                <div className={styles.pos1}>
                  <Magnetic>
                    <AboutImage src="/aboutImages/spaceHeavy.webp" />
                  </Magnetic>
                </div>
                <div className={styles.pos2}>
                  <Magnetic>
                    <AboutImage src="/aboutImages/lemans.webp" />
                  </Magnetic>
                </div>
                <div className={styles.pos3}>
                  <Magnetic>
                    My favourite show ever is "Band Of Brothers"
                  </Magnetic>
                </div>
                <div className={styles.pos4}>
                  <Magnetic>
                    I play football, and enjoy watching chelsea (not right now
                    though...)!
                  </Magnetic>
                </div>
                <div className={styles.pos5}>
                  <Magnetic>
                    <AboutImage src="/aboutImages/bandBrothers.jpg" />
                  </Magnetic>
                </div>
              </AboutPageSection>
            </div>

            <div className={styles.page1SectionContainer}>
              <AboutPageSection title="title3">
                <Magnetic>
                  I love the challenge of materializing an idea into an
                  interactive experience. I love being creative
                </Magnetic>
              </AboutPageSection>
            </div>
          </div>
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
