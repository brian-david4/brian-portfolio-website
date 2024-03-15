import { NavLink } from "../../../types";
import styles from "./navBody.module.css";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { char_enter } from "../HeaderNavAnims";
import { hoveredAnim } from "./navBodyAnim";

interface NavBodyProps {
  links: NavLink[];
  setMenuFalse: () => void;
}

const NavBody = ({ links, setMenuFalse }: NavBodyProps) => {
  const [hoveredLink, setHoveredLink] = useState({ isActive: false, index: 0 });

  const getChars = (word: string) => {
    let chars: ReactNode[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          key={char + i}
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={char_enter}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, idx) => (
        <Link
          onMouseEnter={() => setHoveredLink({ isActive: true, index: idx })}
          onMouseLeave={() => setHoveredLink({ isActive: false, index: idx })}
          onClick={() => setMenuFalse()}
          className={styles.link}
          key={`l_${idx}`}
          to={link.to}
        >
          <motion.p
            variants={hoveredAnim}
            animate={
              hoveredLink.isActive && hoveredLink.index != idx
                ? "hovered"
                : "inactive"
            }
            className={styles.title}
          >
            {getChars(link.title)}
          </motion.p>
        </Link>
      ))}
    </div>
  );
};

export default NavBody;
