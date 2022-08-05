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
        className={styles.hamburguer}
      >
        {menuMobileState 
          ? <GrClose className={styles.hamburguer__icon}/>
          : <FaBars className={styles.hamburguer__icon}/>
        }        
      </div>

      <aside className={styles.menu}>
        <h1 className={styles.menu__welcome}>
          <a href="">Bem Vindo!</a>
        </h1>          
        <p className={styles.menu__content}>Thiago Fernandes</p>
        <p className={styles.menu__content}>Desenvolvedor Front-End</p>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Portfolio</li>
            <li>Educação</li>
            <li>Experiencia</li>
            <li>Contato</li>
          </ul>
        </nav>
        <button>Baixar Currículo</button>
        <button>Contratar</button>
      </aside>
    </>
  );
}

export default memo(Menu);
