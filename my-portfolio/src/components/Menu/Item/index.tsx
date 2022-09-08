import styles from './Item.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavItens } from 'Types/types';

export default function Item({title, href, state, setState}: NavItens) {

  return (
    <li className={styles.item} onClick={() => setState(state = false)}>
      <AnchorLink href={href}>{title}</AnchorLink>
    </li>    
  );
}
