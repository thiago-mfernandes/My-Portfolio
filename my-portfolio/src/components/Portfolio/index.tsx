import styles from './Home.module.scss';

export default function Portfolio() {
  return (
    <>
      <section className={styles.home}> 

        <div className={styles.home__container}>
          <a href='#' className={styles.home__container___img}></a>
          <div className={styles.home__containerTitle}>
            <span className={styles.home__containerTitle___content}>WebSite</span>
            <h2 className={styles.home__containerTitle___title}>Email Validade Juridica</h2>
            <div className={styles.home__containerTitle___contentBox}>
              <p className={styles.home__containerTitle___contentBox____content}>Projeto desenvolvido utilizando um template fornecido pelo cliente e adequado as necessidades do mesmo. Feito em React.Js</p>
            </div>
            <button className={styles.home__containerTitle___btn}>Ver Portfolio</button>
          </div>
        </div>

        <div className={styles.home__container}>
          <a href='#' className={styles.home__container___img}></a>
          <div className={styles.home__containerTitle}>
            <span className={styles.home__containerTitle___content}>WebSite</span>
            <h2 className={styles.home__containerTitle___title}>Dianita Costura Criativa</h2>
            <div className={styles.home__containerTitle___contentBox}>
              <p className={styles.home__containerTitle___contentBox____content}>Desenvolvido em Typescript, React.Js, SASS. Alguns testes foram desenvolvidos em Jest, email de formulário e Newsletter implementado com EmailJS, Animações utilizando a biblioteca Framer-Motion.</p>
            </div>
            <button className={styles.home__containerTitle___btn}>Ver Portfolio</button>
          </div>
        </div>
      </section>
    </>
  );
}
