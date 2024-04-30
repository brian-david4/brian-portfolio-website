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
import WaveScene from "../../components/WaveEffect/WaveScene";

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
              <AboutPageSection title="aspirations">
                <AboutPosition left={10} top={8} width={25}>
                  <Magnetic>
                    I love the challenge of materializing an idea into an
                    interactive experience.
                  </Magnetic>
                </AboutPosition>

                <AboutPosition bottom={5} right={14} width={25}>
                  <Magnetic>
                    I am working towards learning Three.js and WebGL.
                  </Magnetic>
                </AboutPosition>

                <AboutPosition left={25} top={50} width={24}>
                  <Magnetic>
                    I aim to be able to work freelance as a creative developer
                  </Magnetic>
                </AboutPosition>

                <AboutPosition px height={200} width={200} bottom={0} left={4}>
                  <Magnetic>
                    <WaveScene src="/aboutImages/lemans.webp" />
                  </Magnetic>
                </AboutPosition>
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
