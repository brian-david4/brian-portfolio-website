import { motion } from "framer-motion";
import styles from "./aboutFoot.module.css";
import { aboutLinkEnter } from "./anims";

interface AboutFooterProps {
  inView: boolean;
}

const AboutFooter = ({ inView }: AboutFooterProps) => {
  const links = [
    { title: "home", href: "/" },
    { title: "projects", href: "/projects" },
    { title: "contact", href: "/contact" },
  ];

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.links}>
          {links.map((link, idx) => (
            <motion.a
              custom={idx}
              variants={aboutLinkEnter}
              initial="initial"
              animate={inView ? "enter" : "initial"}
              className={styles.link}
              href={link.href}
            >
              {link.title}
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutFooter;
