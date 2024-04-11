import { motion } from "framer-motion";
import styles from "./txtHov.module.css";
import { useState } from "react";
import { textHoverImage } from "./anims";
import Portal, { PortalTarget } from "../Portal/Portal";

interface TextHoverProps {
  children: string;
  images: Array<string[]>;
  arrayIndex: number;
}

const TextHover = ({ children, images, arrayIndex }: TextHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <span
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.word}
      >
        {children}
      </span>

      {isHovered &&
        images[arrayIndex].map((src, idx) => (
          <Portal key={`txtImg_${idx}`} target={PortalTarget.PORTAL}>
            <motion.div
              custom={idx}
              className={styles.imgWrapper}
            >
              <img src={src} alt="image" />
            </motion.div>
          </Portal>
        ))}
    </>
  );
};

export default TextHover;
