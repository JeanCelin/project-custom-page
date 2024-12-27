import MainDefault from "@/components/Mains/MainDefault";
import NavbarDefault from "@/components/Navbars/NavDefault/NavbarDefault";
import FooterDefault from "@/components/Footers/FooterDefault/FooterDefault";

import styles from "@/styles/pages/Preview.module.css";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <main className={styles.preview__container}>
      <h1 className={styles.preview__title}>Preview Your Page</h1>
      <div className={styles.preview__layout}>
        <section className={styles.preview__page}>
          {/* <NavbarDefault />
          <MainDefault />
          <FooterDefault /> */}
        </section>
      </div>

      <Link className={styles.preview__button} href={"/"}>
        BACK
      </Link>
    </main>
  );
}
