import styles from './Sobre.module.scss';
import Me from 'assets/campeao.jpg';
import stacks from 'data/stacks.json';

export default function Sobre() {
  return (
    <>
      <section className={styles.about}>
        <hr className={styles.about__line}/>
        <div className={styles.about__container}>
          <h2 className={styles.about__container___title}>
            <br /> Meu nome é <span className={styles.about__container___title}>
              Thiago Fernandes </span>
              e sou Desenvolvedor Front-End especializado em React!
          </h2>
          <p className={styles.about__container___content}>Gosto também de me aventurar, ocasionalmente, em projetos pessoais de Design! Atualmente trabalho em uma agência de Comunicação construindo através do uso de tecnologia, projetos e sonhos para os nosso clientes!</p>
          <div className={styles.about__container___containerStacks}>
            <h2 className={styles.about__container___containerStacks____title}>
              Tecnologias que estou desenvolvendo minhas habilidades atualmente:
            </h2>

            {
              stacks.map((item, index) => (
                <div 
                  key={index}
                  className={styles.about__container___containerStacks____card}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={styles.about__container___containerStacks____card_____icon}
                  />
                  <h3 className={styles.about__container___containerStacks____card_____subtitle}>{item.content}
                  </h3>
                </div>
              ))
            } 
          </div>
        </div>
      </section>
    </>
  );
}
