import Image from "next/image";
import styles from "./Navbar3.module.css";

export default function Navbar3() {
  const config = [
    {
      logo: "/logo-default.jpg",
      alt: "logo",
    },
    {
      items: ["page1", "page2", "page3", "page4", "page5"],
    },
  ];

  return (
    <nav className={styles.navbar__container}>
      <ul className={styles.navbar__list}>
        {config[1].items.map((element, index) => (
          <li key={index} className={styles.navbar__item}>
            {element.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}
