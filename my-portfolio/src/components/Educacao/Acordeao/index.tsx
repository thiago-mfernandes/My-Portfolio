import styles from './Acordeao.module.scss';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface AcordionState {
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  titulo: string,
  descricao?: string,
  d1?: string,
  d2?: string,
  d3?: string,
  d4?: string,
  d5?: string,
  d6?: string,
  d7?: string,
  d8?: string,
  d9?: string
}

export default function Acordeao({state, setState, titulo, descricao, d1, d2, d3, d4, d5, d6, d7, d8, d9}:AcordionState) {
  return (
    <div 
      onClick={() => setState(!state)}
      className={styles.acordeao}
    >
      <div 
        className={ state
          ? styles.acordeao__cardTitleActive
          : styles.acordeao__cardTitleInative}
      >
        <h3 className={styles.acordeao__cardTitleActive___subtitle}>{titulo}</h3>
        { state 
          ? <MdExpandLess className={styles.iconActive} />
          : <MdExpandMore className={styles.icon} />
        }
      </div>
      <div 
        className={ state
          ? styles.acordeao__cardFaqContentOpen
          : styles.acordeao__cardFaqContentClose
        }
      >
        <p 
          className={styles.acordeao__cardFaqContentOpen___content}
        >
          {descricao}<br/>{d1}<br/>{d2}<br/>{d3}<br/>{d4}<br/>{d5}<br/>{d6}<br/>{d7}<br/>{d8}<br/>{d9}
        </p>
      </div>
    </div>
  );
}
