import styles from "./NavbarDefault.module.css";
import Image from "next/image";

export default function NavbarDefault() {
  return (
    <nav className={styles.navbar__container}>
      <p>Your Logo</p>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>Item1</li>
        <li className={styles.navbar__item}>Item2</li>
        <li className={styles.navbar__item}>Item3</li>
        <li className={styles.navbar__item}>Item4</li>
        <li className={styles.navbar__item}>Item5</li>
      </ul>
    </nav>
  );
}
