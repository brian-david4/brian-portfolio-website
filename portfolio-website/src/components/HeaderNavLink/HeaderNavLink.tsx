import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { char_enter } from "./anims";
import styles from "./hnavlink.module.css";

interface HeaderNavLinkProps {
  to: string;
  title: string;
  key: string;
}

const HeaderNavLink = ({ to, title, key }: HeaderNavLinkProps) => {
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
    <Link className={styles.link} key={key} to={to}>
      <motion.p className={styles.title}>{getChars(title)}</motion.p>
    </Link>
  );
};

export default HeaderNavLink;
