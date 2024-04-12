import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import styles from "./notFound.module.css";

const NotFound = () => {
  const { y } = useMousePosition();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const keys = [
    "notFound1",
    "notFound2",
    "notFound3",
    "notFound4",
    "notFound5",
    "notFound6",
    "notFound7",
    "notFound8",
    "notFound9",
    "notFound10",
  ];

  const message = "404";

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setScreenWidth(window.innerWidth)
      );
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.mainTitle}>
        {message.split("").map((ltr, idx) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.65, 0, 0.35, 1],
              delay: 0.5 + idx * 0.5,
            }}
            key={`404l_${idx}`}
          >
            {ltr}
          </motion.span>
        ))}
      </h1>

      {keys.map((key, idx) => (
        <motion.div
          key={key}
          custom={idx}
          animate={screenWidth > 670 ? { top: y - 50 } : ""}
          style={{
            opacity: `${80 - idx * 10}%`,
            filter: `blur(${idx * 0.12}px)`,
          }}
          transition={{
            type: "tween",
            ease: [0.25, 1, 0.5, 1],
            duration: 0.1 + idx * 0.08,
          }}
          className={styles.mouseTitle}
        >
          page not found
        </motion.div>
      ))}
    </div>
  );
};

export default NotFound;
