import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import styles from "./MouseTrail.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface MouseTrailProps {
  on404Page: boolean;
  footerHovered: boolean;
}

const MouseTrail = ({ on404Page, footerHovered }: MouseTrailProps) => {
  const { pathname } = useLocation();
  const [onContactPage, setOnContactPage] = useState(false);

  useEffect(() => {
    if (pathname === "/contact" || pathname === "/about") {
      setOnContactPage(true);
    } else {
      setOnContactPage(false);
    }
  }, [pathname]);

  const { x, y } = useMousePosition();

  return (
    <motion.div
      className={`${styles.mouseTrail} 
        ${
          onContactPage || on404Page || footerHovered ? styles.contactPage : ""
        } `}
      animate={{ left: x - 10 / 2, top: y - 10 / 2 }}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      <div className={styles.trailInner}></div>
    </motion.div>
  );
};

export default MouseTrail;
