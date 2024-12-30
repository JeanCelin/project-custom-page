import MainDefault from "@/components/Mains/MainDefault/MainDefault";
import NavbarDefault from "@/components/Navbars/NavDefault/NavbarDefault";
import FooterDefault from "@/components/Footers/FooterDefault/FooterDefault";

import styles from "@/styles/pages/Preview.module.css";
import Link from "next/link";
import Navbar1 from "@/components/Navbars/Navbar1/Navbar1";
import Navbar2 from "@/components/Navbars/Navbar2/Navbar2";
import Navbar3 from "@/components/Navbars/Navbar3/Navbar3";
import Main1 from "@/components/Mains/Main1/Main1";
import Main2 from "@/components/Mains/Main2/Main2";

export default function PreviewPage() {
  return (
    <main className={styles.preview__container}>
      <h1 className={styles.preview__title}>Preview Your Page</h1>
      <div className={styles.preview__layout}>
        <section className={styles.preview__page}>
          <NavbarDefault />
          <Main2 />
        </section>
      </div>

      <Link className={styles.preview__button} href={"/"}>
        BACK
      </Link>
    </main>
  );
}
