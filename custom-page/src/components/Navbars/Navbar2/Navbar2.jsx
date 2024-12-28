import { useState } from "react";
import styles from "./Navbar2.module.css";
import Image from "next/image";

export default function Navbar2() {
  const config = [
    {
      logo: "/logo-default.jpg",
      alt: "logo",
    },
    {
      items: ["page1", "page2", "page3", "page4", "page5"],
    },
  ];

  const [showItens, setShowItens] = useState(false);

  return (
    <nav className={styles.navbar__container}>
      <Image
        className={styles.navbar__menuBurger}
        src={"/menu-burger.png"}
        height={64}
        width={64}
        alt="menu"
        onClick={() => {
          setShowItens(!showItens);
        }}
      />
      <div className={styles.navbar__listContainer}>
        {showItens && (
          <ul className={styles.navbar__list}>
            {config[1].items.map((element, index) => (
              <li key={index} className={styles.navbar__item}>
                {element.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
