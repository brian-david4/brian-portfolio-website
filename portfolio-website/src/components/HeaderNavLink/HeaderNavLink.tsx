import { Link } from "react-router-dom";
import styles from "./hnavlink.module.css";
import { motion } from "framer-motion";
import { char_enter } from "./anims";

interface HeaderNavLinkProps {
  to: string;
  title: string;
}

const HeaderNavLink = ({ to, title }: HeaderNavLinkProps) => {
  const title_chars = title.split("");
  return (
    <Link to={to} className={styles.link}>
      <div className={styles.titleWrapper}>
        <p>
          {title_chars.map((char, i) => (
            <motion.span
              custom={i}
              variants={char_enter}
              initial="initial"
              animate="enter"
              className={styles.titleChar}
              key={i}
            >
              {char}
            </motion.span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default HeaderNavLink;
