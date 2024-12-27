import Image from "next/image";
import styles from "./Navbar1.module.css";

export default function Navbar1() {
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
    <nav className={styles.navbar1__container}>
      <Image src={config[0].logo} height={64} width={64} alt={config[0].alt} />
      <ul className={styles.navbar1__list}>
        {config[1].items.map((element, index) => (
          <li key={index} className={styles.navbar1__item}>
            {element.toUpperCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}
