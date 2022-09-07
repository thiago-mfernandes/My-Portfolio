import styles from './Item.module.scss';
import { ItemPortfolio } from 'Types/types';

export default function Item({img, alt, href, jobTitle, title, description}:ItemPortfolio) {
  return (
    <div className={styles.container}>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} className={styles.container___img}/>
      </a>
      <div className={styles.containerTitle}>
        <span className={styles.containerTitle___content}>{jobTitle}</span>
        <h2 className={styles.containerTitle___title}>{title}</h2>
        <div className={styles.containerTitle___contentBox}>
          <p className={styles.containerTitle___contentBox____content}>{description}</p>
        </div>
        <button className={styles.containerTitle___btn}>Ver Portfolio</button>
      </div>
    </div>
  );
}
