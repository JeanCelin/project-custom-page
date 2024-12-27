import styles from "./MainDefault.module.css";

export default function MainDefault() {
  return (
    <main className={styles.main__container}>
      <h1 className={styles.main__title}>[Title]</h1>
      <p className={styles.main__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus
        commodi modi nostrum asperiores suscipit quod=.
      </p>
      <button className={styles.main__button}>Button</button>
    </main>
  );
}
