import styles from './Item.module.scss';
import { ItemPortfolio } from 'Types/types';

export default function Item({img, alt, href, jobTitle, title, description}:ItemPortfolio) {
  return (
    <div className={styles.container}>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} className={styles.container___img}/>
      </a>
      <div className={styles.container__containerTitle}>
        <span className={styles.container__containerTitle__content}>{jobTitle}</span>
        <h2 className={styles.container__containerTitle__title}>{title}</h2>
        <div className={styles.container__containerTitle__contentBox}>
          <p className={styles.containerTitle__contentBox___content}>{description}</p>
        </div>        
        <a 
          href={href} 
          target="_blank" 
          rel="noreferrer"  
          className={styles.container__containerTitle___link}
        >
          <button className={styles.container__containerTitle___link____btn}>Ver Portfolio</button>
        </a>
      </div>
    </div>
  );
}
