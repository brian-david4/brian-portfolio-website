import { motion } from "framer-motion";
import styles from "./contactMouse.module.css";
import { useMousePosition } from "../../hooks/useMousePosition";

interface ContactMouseEffectProps {
  isTitleHovered: boolean;
}

const ContactMouseEffect = ({ isTitleHovered }: ContactMouseEffectProps) => {
  const { x, y } = useMousePosition();
  const size = isTitleHovered ? 200 : 50;
  const colours = ["#faa498", "#4a290f", "#ed98b5", "ed98b5"];

  return (
    <>
      {colours.map((colour, idx) => (
        <motion.div
          key={`cursor_${idx}`}
          animate={{ opacity: isTitleHovered ? 1 : 0, left: x, top: y }}
          transition={{ type: "tween", ease: "easeOut", delay: idx * 0.002 }}
          style={{
            height: size,
            width: size,
            backgroundColor: colour,
            filter: "blur(20px)",
          }}
          className={styles.cursor}
        ></motion.div>
      ))}
    </>
  );
};

export default ContactMouseEffect;
