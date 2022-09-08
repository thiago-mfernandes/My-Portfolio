import { memo, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import styles from './Menu.module.scss';

function Menu() {

  const[menuMobileState, setMenuMobileState] = useState(false);
  
  return (
    <>
      <div 
        onClick={() => setMenuMobileState(!menuMobileState)}
        className={menuMobileState
          ? styles.hamburguerOpen
          : styles.hamburguerClose
        }
      >
        {menuMobileState 
          ? <GrClose className={styles.hamburguer__icon}/>
          : <FaBars color='#000'className={styles.hamburguer__icon}/>
        }        
      </div>

      <aside className={menuMobileState
        ? styles.menu
        : styles.menuClose
      }>
        <div className={styles.menu__container}>
          <h1 className={styles.menu__container___welcome}>
            <a className={styles.menu__title}href="">Bem Vindo!</a>
          </h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list___item}>Home</li>
            <li className={styles.nav__list___item}>Sobre</li>
            <li className={styles.nav__list___item}>Portfolio</li>
            <li className={styles.nav__list___item}>Educação</li>
            <li className={styles.nav__list___item}>Experiencia</li>
            <li className={styles.nav__list___item}>Contato</li>
          </ul>
        </nav>
        <div className={styles.menu__container}>
          <button className={styles.menu__container___button}>
            <a href='curriculo.zip' download='curriculo.zip' type='application/zip'>Baixar Currículo</a>
          </button>
          <button className={styles.menu__container___button}>Contratar</button>
        </div>
      </aside>
    </>
  );
}

export default memo(Menu);
