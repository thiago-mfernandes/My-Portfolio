import { memo, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import styles from './Menu.module.scss';
import nav from 'data/nav.json';
import Item from './Item';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
            {
              nav.map((item, index) => (
                <Item 
                  state={menuMobileState}
                  setState={setMenuMobileState}
                  key={index} 
                  href={item.href} 
                  title={item.title} 
                />
              ))
            }
          </ul>
        </nav>
        <div className={styles.menu__container}>
          <button className={styles.menu__container___button}>
            <a href='curriculo.zip' download='curriculo.zip' type='application/zip'>Baixar Currículo</a>
          </button>
          <button className={styles.menu__container___button} onClick={() => setMenuMobileState(false)}>
            <AnchorLink href="#contato">Contratar</AnchorLink>
          </button>
        </div>
      </aside>
    </>
  );
}

export default memo(Menu);
