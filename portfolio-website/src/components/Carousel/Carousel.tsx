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
    let finalPosition = -width / 2 - 8;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

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
          <motion.div
            key={`c_itm_${idx}`}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.carouselItem}
            whileHover={{ color: `var(--pink)` }}
          >
            {itm}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Carousel;
