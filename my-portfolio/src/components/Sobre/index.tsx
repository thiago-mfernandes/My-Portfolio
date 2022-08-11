import styles from './Sobre.module.scss';
import Me from 'assets/campeao.jpg';
import data from './data.json';

export default function Sobre() {
  return (
    <>
      <section className={styles.about}>
        <img src={Me} alt="Foto do campeao" className={styles.about__imgAbout}/>
        <div className={styles.about__container}> {/* div que contem a info escrita e as stacks */}
          <h2 className={styles.about__container___title}>
            Seja bem vindo!<br /> Meu nome é <span className={styles.about__container___title}>
              Thiago Fernandes </span>
              e sou Desenvolvedor Front-End especializado em React!
          </h2>
          <p className={styles.about__container___content}>Gosto também de me aventurar, ocasionalmente, em projetos pessoais de Design! Atualmente trabalho em uma agência de Comunicação construindo através do uso de tecnologia, projetos e sonhos para os nosso clientes!</p>
          <div className={styles.about__container___containerStacks}> {/* div que contem as stacks */}
            <h2 className={styles.about__container___containerStacks____title}>
              Tecnologias que venho usando e desenvolvendo minhas habilidades atualmente:
            </h2>

            {
              data.map((item, index) => (
                <div 
                  key={index}
                  className={styles.about__container___containerStacks____card}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={styles.about__container___containerStacks____card_____icon}
                  />
                  <h3 className={styles.about__container___containerStacks____card_____subtitle}>   {item.content}
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
