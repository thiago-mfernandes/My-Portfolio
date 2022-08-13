import styles from './JobExperience.module.scss';
import { GrUserWorker } from 'react-icons/gr';
import { JobsExperience } from 'Types/types';

export default function JobExperience({title, subtitle, description}:JobsExperience) {
  return(
    <article className={styles.container}>
      <div className={styles.container__boxIcon}>
        <GrUserWorker className={styles.container__boxIcon___icon}/>
      </div>
      <div className={styles.container__boxDescription}>
        <h3 className={styles.container__boxDescription___title}>{title}</h3>
        <span className={styles.container__boxDescription___subTitle}>{subtitle}</span>
        <p className={styles.container__boxDescription___content}>{description}</p>
      </div>
    </article>
  );
}
