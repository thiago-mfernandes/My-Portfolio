import Tag from 'components/Tag';
import { memo } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <>
      <div className={styles.hamburguer}>
        <FaBars className={styles.hamburguer__icon}/>
      </div>

      <aside className={styles.menu}>
        <h1 className={styles.menu__title}>
          <Tag value='Bem Vindo' class={`${styles.menu__title}`}/>
          <a href="">&lt;p&gt; Bem Vindo&lt;p/&gt;</a>
        </h1>          
        <p>Thiago Fernandes</p>
        <p>Desenvolvedor Front-End</p>
        <nav>
          <ul>
            <li>&lt;Home/&gt;</li>
            <li>&lt;Sobre/&gt;</li>
            <li>&lt;Portfolio/&gt;</li>
            <li>&lt;Educação/&gt;</li>
            <li>&lt;Experiencia/&gt;</li>
            <li>&lt;Contato/&gt;</li>
          </ul>
        </nav>
        <button>Baixar Currículo</button>
        <button>Contratar</button>
      </aside>
    </>
  );
}

export default memo(Menu);
