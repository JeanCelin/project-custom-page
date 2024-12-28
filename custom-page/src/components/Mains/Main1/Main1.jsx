import styles from "./Main1.module.css";

export default function Main1() {
  return (
    <main className={styles.main__container}>
      <section className={styles.main_section_img}>
        <div className={styles.main__img}>Imagem</div>
        <div className={styles.main__img}>Imagem</div>
      </section>
      <section className={styles.main__section_art}>
        <article className={styles.main__article}>
          <h1 className={styles.main__title}>[Title]</h1>
          <p className={styles.main__text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            temporibus neque perspiciatis. Soluta omnis eum alias velit, nemo
            delectus? Consequatur in pariatur velit necessitatibus quisquam modi
            minima iure, saepe accusamus? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Hic temporibus neque perspiciatis.
            Soluta omnis eum alias velit, nemo delectus? Consequatur in pariatur
            velit necessitatibus quisquam modi minima iure, saepe accusamus?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            temporibus neque perspiciatis. Soluta omnis eum alias velit, nemo
            delectus? Consequatur in pariatur velit necessitatibus quisquam modi
            minima iure, saepe accusamus?
          </p>
          <p className={styles.main__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            qui similique illum. Veniam eum sed, obcaecati in reprehenderit
            repellat? Eius recusandae similique laboriosam voluptates neque
            porro delectus modi nesciunt quam?
          </p>
          <p className={styles.main__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            qui similique illum. Veniam eum sed, obcaecati in reprehenderit
            repellat? Eius recusandae similique laboriosam voluptates neque
            porro delectus modi nesciunt quam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Inventore qui similique illum. Veniam
            eum sed, obcaecati in reprehenderit repellat? Eius recusandae
            similique laboriosam voluptates neque porro delectus modi nesciunt
            quam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore qui similique illum. Veniam eum sed, obcaecati in
            reprehenderit repellat? Eius recusandae similique laboriosam
            voluptates neque porro delectus modi nesciunt quam?
          </p>
        </article>
      </section>
    </main>
  );
}
