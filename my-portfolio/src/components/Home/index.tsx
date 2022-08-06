import styles from './Home.module.scss';

export default function Home() {
  return (
    <>
      <section className={styles.home}> {/* secao que engloba todos os projetos */}
        <div className={styles.home__container}>{/* a div que contem a imagem e o card */}
          <a href='#' className={styles.home__container___img}></a>
          <div className={styles.home__containerTitle}>{/* div card */}
            <span className={styles.home__containerTitle___content}>WebSite</span>
            <h2 className={styles.home__containerTitle___title}>Email Validade Juridica</h2>
            <div className={styles.home__containerTitle___contentBox}>{/* div que contem a barrinha amarela lateral */}
              <p className={styles.home__containerTitle___contentBox____content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit facere tenetur? Hic dicta quidem vero accusamus provident? Eligendi soluta assumenda cupiditate adipisci qui quos ad ex doloremque odio ullam.</p>
            </div>
            <button className={styles.home__containerTitle___btn}>Ver Portfolio</button>
          </div>
        </div>
        <div className={styles.home__container}>{/* a div que contem a imagem e o card */}
          <a href='#' className={styles.home__container___img}></a>
          <div className={styles.home__containerTitle}>{/* div card */}
            <span className={styles.home__containerTitle___content}>WebSite</span>
            <h2 className={styles.home__containerTitle___title}>Email Validade Juridica</h2>
            <div className={styles.home__containerTitle___contentBox}>{/* div que contem a barrinha amarela lateral */}
              <p className={styles.home__containerTitle___contentBox____content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit facere tenetur? Hic dicta quidem vero accusamus provident? Eligendi soluta assumenda cupiditate adipisci qui quos ad ex doloremque odio ullam.</p>
            </div>
            <button className={styles.home__containerTitle___btn}>Ver Portfolio</button>
          </div>
        </div>
        <div className={styles.home__container}>{/* a div que contem a imagem e o card */}
          <a href='#' className={styles.home__container___img}></a>
          <div className={styles.home__containerTitle}>{/* div card */}
            <span className={styles.home__containerTitle___content}>WebSite</span>
            <h2 className={styles.home__containerTitle___title}>Email Validade Juridica</h2>
            <div className={styles.home__containerTitle___contentBox}>{/* div que contem a barrinha amarela lateral */}
              <p className={styles.home__containerTitle___contentBox____content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugit facere tenetur? Hic dicta quidem vero accusamus provident? Eligendi soluta assumenda cupiditate adipisci qui quos ad ex doloremque odio ullam.</p>
            </div>
            <button className={styles.home__containerTitle___btn}>Ver Portfolio</button>
          </div>
        </div>
      </section>
    </>
  );
}
