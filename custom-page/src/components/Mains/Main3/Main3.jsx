import styles from "./Main3.module.css";

export default function Main3() {
  return (
    <section className={styles.main__container}>
      <div className={styles.main__login}>
        <h1 className={styles.main__title}>Login</h1>
        <form className={styles.main__form}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
            />
          </div>
          <input type="button" value="Confirm" className={styles.main__form_button}/>
        </form>
      </div>
    </section>
  );
}
