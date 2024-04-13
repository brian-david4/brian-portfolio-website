import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";
import styles from "./MouseTrail.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface MouseTrailProps {
  paths: string[];
}

const MouseTrail = ({ paths }: MouseTrailProps) => {
  const { pathname } = useLocation();
  const [onContactPage, setOnContactPage] = useState(false);
  const [on404Page, setOn404Page] = useState(false);

  useEffect(() => {
    if (!paths.includes(pathname)) {
      setOn404Page(true);
    } else {
      setOn404Page(false);
    }

    if (pathname === "/contact") {
      setOnContactPage(true);
    } else {
      setOnContactPage(false);
    }
  }, [pathname]);
  const { x, y } = useMousePosition();
  return (
    <motion.div
      className={`${styles.mouseTrail} 
        ${onContactPage ? styles.contactPage : ""} 
        ${on404Page ? styles.contactPage : ""}
        `}
      animate={{ left: x - 10 / 2, top: y - 10 / 2 }}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      <div className={styles.trailInner}></div>
    </motion.div>
  );
};

export default MouseTrail;
