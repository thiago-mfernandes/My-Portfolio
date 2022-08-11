import styles from './Educacao.module.scss';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useState } from 'react';

export default function Educacao() {

  const [cardGraduationState, setCardGraduationState] = useState(false);
  const [cardReactCoursesState, setCardReactCoursesState] = useState(false);

  return (
    <>
      <section className={styles.educacao}>
        <div className={styles.educacao__box}>

          <h3 className={styles.educacao__box___subtitle}>Educação</h3>
          <h2 className={styles.educacao__box___title}>Formação Acadêmica</h2>
          
          <div 
            onClick={() => setCardGraduationState(!cardGraduationState)}
            className={styles.educacao__box___card}>
            <div 
              className={ cardGraduationState
                ? styles.educacao__box___card____boxFaqActive
                : styles.educacao__box___card____boxFaqInative}
            >
              <h3 className={styles.educacao__box___subtitle}>Análise e Desenvolvimento de Sistemas</h3>
              { cardGraduationState 
                ? <MdExpandLess className={styles.iconActive} />
                : <MdExpandMore className={styles.icon} />
              }
            </div>
            <div 
              className={ cardGraduationState
                ? styles.educacao__box___card____boxFaqContentOpen
                : styles.educacao__box___card____boxFaqContentClose
              }
            >
              <p className={styles.educacao__box___card____boxFaqContentOpen_____content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi maiores sed quos fugit itaque eum quae fugiat assumenda nobis, tempore repellat sequi quod. Iusto architecto ad debitis molestias neque?</p>
            </div>
          </div>

          <h2 className={styles.educacao__box___title}>Cursos</h2>
          <div 
            onClick={() => setCardReactCoursesState(!cardReactCoursesState)}
            className={styles.educacao__box___card}>
            <div 
              className={ cardReactCoursesState
                ? styles.educacao__box___card____boxFaqActive
                : styles.educacao__box___card____boxFaqInative}
            >
              <h3 className={styles.educacao__box___subtitle}>Análise e Desenvolvimento de Sistemas</h3>
              { cardReactCoursesState 
                ? <MdExpandLess className={styles.iconActive} />
                : <MdExpandMore className={styles.icon} />
              }
            </div>
            <div 
              className={ cardReactCoursesState
                ? styles.educacao__box___card____boxFaqContentOpen
                : styles.educacao__box___card____boxFaqContentClose
              }
            >
              <p className={styles.educacao__box___card____boxFaqContentOpen_____content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi maiores sed quos fugit itaque eum quae fugiat assumenda nobis, tempore repellat sequi quod. Iusto architecto ad debitis molestias neque?</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
