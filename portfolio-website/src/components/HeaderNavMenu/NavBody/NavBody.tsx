import { NavLink } from "../../../types";
import styles from "./navBody.module.css";
import HeaderNavLink from "../../HeaderNavLink/HeaderNavLink";

interface NavBodyProps {
  links: NavLink[];
}

const NavBody = ({ links }: NavBodyProps) => {
  return (
    <div className={styles.body}>
      {links.map((link, idx) => (
        <HeaderNavLink key={`l_${idx}`} title={link.title} to={link.to} />
      ))}
    </div>
  );
};

export default NavBody;
