import styles from "./NavbarDefault.module.css";
import Image from "next/image";

export default function NavbarDefault() {
  return (
  
    <nav className={styles.navbar__container}>
      <Image src="/logo-default.jpg" width={64} height={64}></Image>
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__item}>Item 1</li>
        <li className={styles.navbar__item}>Item 2</li>
        <li className={styles.navbar__item}>Item 3</li>
        <li className={styles.navbar__item}>Item 4</li>
        <li className={styles.navbar__item}>Item 5</li>
      </ul>
    </nav>
  );
}
