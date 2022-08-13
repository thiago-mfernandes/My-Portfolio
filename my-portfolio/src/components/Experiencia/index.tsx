import styles from './Experiencia.module.scss';
import JobExperience from './JobExperience';
import experiences from 'data/experience.json';

export default function Experiencia() {
  return (
    <section className={styles.container}>
      <div className={styles.container__boxTitle}>
        <span className={styles.container__boxTitle___subtitle}>Experiência</span>
        <h2 className={styles.container__boxTitle___title}>Minhas Experiências de Trabalho</h2>
      </div>

      <div className={styles.container__jobsContainer}>
        {
          experiences.map((experience, index) => (
            <JobExperience 
              key={index} 
              title={experience.title} 
              subtitle={experience.subtitle} 
              description={experience.description}
            />
          ))
        }
      </div>
    </section>
  );
}
