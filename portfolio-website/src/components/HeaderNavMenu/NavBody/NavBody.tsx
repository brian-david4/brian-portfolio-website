import { motion } from "framer-motion";
import { NavLink } from "../../../types";
import styles from "./navBody.module.css";
import { char_enter } from "../HeaderNavAnims";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface NavBodyProps {
  links: NavLink[];
}

const NavBody = ({ links }: NavBodyProps) => {
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
        <Link className={styles.link} key={`link_${idx}`} to={link.to}>
          <motion.p>{getChars(link.title)}</motion.p>
        </Link>
      ))}
    </div>
  );
};

export default NavBody;
