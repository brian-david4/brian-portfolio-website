import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { phraseEnter } from "./anims";
import styles from "./mouseTC.module.css";

const ContactHello = () => {
  const phrases = [
    "say hello",
    "dites bonjour",
    "diga olá",
    "di ciao",
    "köszönj",
    "di hola",
    "zeg hallo",
    "sano hei",
    "spune buna",
    "sig hej",
  ];

  const [globalIndex, setGlobalIndex] = useState(-1);
  const [last, setLast] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const distanceFromLast = (x: number, y: number) => {
      return Math.hypot(x - last.x, y - last.y);
    };
    const globalIndexIncrease = (e: MouseEvent) => {
      if (distanceFromLast(e.clientX, e.clientY) > 250) {
        setGlobalIndex(globalIndex + 1);
        setLast({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", globalIndexIncrease);
    return () => {
      window.removeEventListener("mousemove", globalIndexIncrease);
    };
  }, [globalIndex]);

  return (
    <div className={styles.wrapper}>
      {phrases.map((phrase, idx) => (
        <motion.span
          className={styles.phrase}
          variants={phraseEnter}
          animate={globalIndex % phrases.length === idx ? "show" : "hidden"}
          key={idx}
        >
          {phrase}
        </motion.span>
      ))}
    </div>
  );
};

export default ContactHello;
