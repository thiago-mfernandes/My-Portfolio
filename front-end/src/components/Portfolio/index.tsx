import styles from './Home.module.scss';
import portfolio from 'data/portfolio.json';
import Item from './item';
import { FaWhatsapp } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <section className={styles.home} id='portfolio'> 
      <button className={styles.home__whatsApp}>
        <a 
          href="https://wa.me/5519984009105"
          target="_blank"
          rel="noreferrer"  
          className={styles.home__whatsApp___link}
        >
          <FaWhatsapp className={styles.home__whatsApp___link____icon}/>
        </a>
      </button>
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
