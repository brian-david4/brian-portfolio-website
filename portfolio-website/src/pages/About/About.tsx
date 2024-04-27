import { motion } from "framer-motion";
import styles from "./about.module.css";
import { useInView } from "react-intersection-observer";
import ContactMouseEffect from "../../components/ContactMouseEffect/ContactMouseEffect";
import { useState } from "react";
import AboutFooter from "../../components/AboutFooter/AboutFooter";
import AboutPageSection from "../../components/AboutPageSection/AboutPageSection";
import Magnetic from "../../components/Magnetic/Magnetic";
import AboutImage from "../../components/AboutImage/AboutImage";
import AboutPosition from "../../components/AboutPosition/AboutPosition";

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
                <AboutPosition
                  left={20}
                  bottom={5}
                  width={10}
                  height={10}
                  minimum
                >
                  <Magnetic>
                    <AboutImage src="/aboutImages/spaceHeavy.webp" />
                  </Magnetic>
                </AboutPosition>

                <AboutPosition
                  left={10}
                  top={10}
                  width={10}
                  height={10}
                  minimum
                >
                  <Magnetic>
                    <AboutImage src="/aboutImages/lemans.webp" />
                  </Magnetic>
                </AboutPosition>

                <AboutPosition top={60} left={10} width={25}>
                  <Magnetic>
                    My favourite show ever is "Band Of Brothers"
                  </Magnetic>
                </AboutPosition>

                <AboutPosition right={10} top={40} width={25}>
                  <Magnetic>
                    I play football, and enjoy watching chelsea (not right now
                    though...)!
                  </Magnetic>
                </AboutPosition>

                <AboutPosition
                  right={20}
                  bottom={15}
                  width={25}
                  height={10}
                  minimum
                >
                  <Magnetic>
                    <AboutImage src="/aboutImages/bandBrothers.jpg" />
                  </Magnetic>
                </AboutPosition>

                <AboutPosition right={10} top={12} width={25}>
                  <Magnetic>I love being creative</Magnetic>
                </AboutPosition>

                <AboutPosition
                  left={13}
                  top={40}
                  width={25}
                  height={10}
                  minimum
                >
                  <Magnetic>
                    <AboutImage src="/aboutImages/kagemusha.webp" />
                  </Magnetic>
                </AboutPosition>
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
