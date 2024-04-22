import { motion } from "framer-motion";
import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { useState } from "react";
import AboutFooter from "../../components/AboutFooter/AboutFooter";
import AboutPageSection from "../../components/AboutPageSection/AboutPageSection";
import MouseFollowText from "../../components/MouseFollowText/MouseFollowText";

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
              <div className={styles.sectionHalf}>
                <AboutPageSection title="title1">
                  <MouseFollowText>
                    I love the challenge of materializing an idea into an
                    interactive experience. I love being creative
                  </MouseFollowText>
                </AboutPageSection>
              </div>
              <div className={styles.sectionHalf}>
                <AboutPageSection title="title2">
                  <MouseFollowText>woooooo</MouseFollowText>
                </AboutPageSection>
              </div>
            </div>

            <div className={styles.page1SectionContainer}>
              <AboutPageSection title="title3">
                <MouseFollowText>woooooooooooo</MouseFollowText>
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
