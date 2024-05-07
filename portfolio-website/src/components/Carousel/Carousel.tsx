import useMeasure from "react-use-measure";
import styles from "./carousel.module.css";
import { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

interface CarouselProps {
  items: string[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 45,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    console.log(xTranslation);

    return () => controls.stop();
  }, [xTranslation, width]);
  return (
    <>
      <motion.div
        style={{ x: xTranslation }}
        className={styles.carouselWrapper}
        ref={ref}
      >
        {[...items, ...items].map((itm, idx) => (
          <div key={`c_itm_${idx}`} className={styles.carouselItem}>
            {itm}
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Carousel;
