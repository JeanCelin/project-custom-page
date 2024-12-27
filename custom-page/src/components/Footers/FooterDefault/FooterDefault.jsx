import styles from "./FooterDefault.module.css";

export default function FooterDefault() {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__main}>
        <p className={styles.footer__title}>[nome da empresa]</p>
        <p className={styles.footer__text}>
          © 2025 Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
