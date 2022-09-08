import styles from './Home.module.scss';
import portfolio from 'data/portfolio.json';
import Item from './item';

export default function Portfolio() {
  return (
    <section className={styles.home} id='portfolio'> 
      <img 
        src="assets/campeao.jpeg" 
        alt="Foto Pessoal Thiago" 
        className={styles.home__img}
      />
      {
        portfolio.map((item, index) => (
          <Item 
            key={index} 
            img={item.img} 
            alt={item.alt}
            href={item.href}
            jobTitle={item.jobType} 
            title={item.title} 
            description={item.description}              
          />
        ))
      }
    </section>
  );
}
