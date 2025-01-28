import styles from '@/styles/pages/Home.module.css'

export default function Home() {
  return (
    <main className={styles.home__container}>
      <h1 className={styles.home__title}>Monte sua página</h1>
      <section className={styles.home__section}>
        <h2 className={styles.home__section_title}>Navbar</h2>
        <p className={styles.home__section_text}>Selecione uma opção:</p>

        <div className={styles.home__option}>
          <h3 className={styles.home__option_title}>opção 1</h3>
          <label htmlFor="navbar1">Navbar1</label>
          <input
            type="radio"
            name="navbar"
            id="navbar1"
            value="navbar1"></input>
        </div>
        <div className={styles.home__option}>
          <h3>opção 2</h3>
          <label htmlFor="navbar2">Navbar2</label>
          <input
            type="radio"
            name="navbar"
            id="navbar2"
            value="navbar2"></input>
        </div>
        <div className={styles.home__option}>
          <h3>opção 3</h3>
          <label htmlFor="navbar3">Navbar3</label>
          <input
            type="radio"
            name="navbar"
            id="navbar3"
            value="navbar3"></input>
        </div>
      </section>

      <section>
        <h2>Main</h2>
        <p>Selecione uma opção:</p>

        <div className={styles.home__option}>
          <h3>Main 1</h3>
          <label htmlFor="main1">Navbar1</label>
          <input type="radio" name="main" id="main1" value="main1"></input>
        </div>
        <div className={styles.home__option}>
          <h3>Main 2</h3>
          <label htmlFor="main2">Main2</label>
          <input type="radio" name="main" id="main2" value="main2"></input>
        </div>
        <div className={styles.home__option}>
          <h3>Main 3</h3>
          <label htmlFor="main3">Main3</label>
          <input type="radio" name="main" id="main3" value="main3"></input>
        </div>
      </section>

      <section>
        <h2>Footer</h2>
        <p>Selecione uma opção:</p>

        <div>
          <h3>Footer 1</h3>
          <label htmlFor="footer2">Footer1</label>
          <input
            type="radio"
            name="footer"
            id="footer1"
            value="footer1"></input>
        </div>
        <div>
          <h3>footer 2</h3>
          <label htmlFor="footer2">Footer2</label>
          <input
            type="radio"
            name="footer"
            id="footer2"
            value="footer2"></input>
        </div>
        <div>
          <h3>footer 3</h3>
          <label htmlFor="footer3">Footer3</label>
          <input
            type="radio"
            name="footer"
            id="footer3"
            value="footer3"></input>
        </div>
      </section>
    </main>
  );
}
