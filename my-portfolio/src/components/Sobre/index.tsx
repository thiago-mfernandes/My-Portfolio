import styles from './Sobre.module.scss';
import Me from 'assets/campeao.jpg';
import React from 'assets/stacks/react.png';
import Typescript from 'assets/stacks/typescript.png';
import Javascript from 'assets/stacks/js.png';
import Sass from 'assets/stacks/sass.png';
import Git from 'assets/stacks/git.png';
import Css3 from 'assets/stacks/css3.png';
import HTML from 'assets/stacks/html.png';

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
            
            <div className={styles.about__container___containerStacks____card}>{/* card da tech */}
              <img src={React} alt="Icone React" className={styles.about__container___containerStacks____card_____icon}/>
              <h3 className={styles.about__container___containerStacks____card_____subtitle}>React</h3>
            </div>

            <div className={styles.about__container___containerStacks____card}>{/* card da tech */}
              <img src={Typescript} alt="Icone Typescript" className={styles.about__container___containerStacks____card_____icon}/>
              <h3 className={styles.about__container___containerStacks____card_____subtitle}>Typescript</h3>
            </div>

            <div className={styles.about__container___containerStacks____card}>{/* card da tech */}
              <img src={Javascript} alt="Icone Javascript" className={styles.about__container___containerStacks____card_____icon}/>
              <h3 className={styles.about__container___containerStacks____card_____subtitle}>Javascript</h3>
            </div>

            <div className={styles.about__container___containerStacks____card}>{/* card da tech */}
              <img src={Sass} alt="Icone Sass" className={styles.about__container___containerStacks____card_____icon}/>
              <h3 className={styles.about__container___containerStacks____card_____subtitle}>Sass</h3>
            </div>

            <div className={styles.about__container___containerStacks____card}>{/* card da tech */}
              <img src={Git} alt="Icone Git" className={styles.about__container___containerStacks____card_____icon}/>
              <h3 className={styles.about__container___containerStacks____card_____subtitle}>Git</h3>
            </div>

            <div className={styles.about__container___containerStacks____card}>{/* card da tech */}
              <img src={Css3} alt="Icone Css3" className={styles.about__container___containerStacks____card_____icon}/>
              <h3 className={styles.about__container___containerStacks____card_____subtitle}>Css3</h3>
            </div>

            <div className={styles.about__container___containerStacks____card}>{/* card da tech */}
              <img src={HTML} alt="Icone HTML5" className={styles.about__container___containerStacks____card_____icon}/>              
              <h3 className={styles.about__container___containerStacks____card_____subtitle}>HTML5</h3>
            </div>   
          </div>
        </div>
      </section>
    </>
  );
}
