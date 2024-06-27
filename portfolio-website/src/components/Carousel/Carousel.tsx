import useMeasure from "react-use-measure";
import styles from "./carousel.module.css";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

interface CarouselProps {
  items: string[];
  inView?: boolean;
}

const Carousel = ({ items, inView }: CarouselProps) => {
  const [ref, { width }] = useMeasure();
  const [itemHovered, setItemHovered] = useState({ index: 0, isActive: false });
  const xTranslation = useMotionValue(0);
  const hoverColor = inView ? "#ff723a" : "#e8a2a9";

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
            animate={{
              color:
                itemHovered.index === idx && itemHovered.isActive
                  ? hoverColor
                  : "#312809",
            }}
            transition={{ ease: [0.16, 1, 0.3, 1] }}
            className={styles.carouselItem}
            onMouseEnter={() => setItemHovered({ index: idx, isActive: true })}
            onMouseLeave={() => setItemHovered({ index: idx, isActive: false })}
          >
            {itm}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Carousel;
