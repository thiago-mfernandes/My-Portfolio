import styles from './Info.module.scss';
import { IContatoInfo } from 'Types/types';
import { BsFillTelephoneFill, BsGithub } from 'react-icons/bs';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import  { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Info({icon, title, content}:IContatoInfo) {

  function switchIcon(iconType:string) {
    switch (iconType) {
    case 'telefone':
      return <BsFillTelephoneFill />;
    case 'email':
      return <MdEmail />;
    case 'local':
      return <MdLocationPin />;
    case 'github':
      return <BsGithub />;    
    default:
      return <AiOutlineLoading3Quarters />;
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.container__boxIcon}>
        { switchIcon(icon) }
      </div>
      <div className={styles.container__boxInfo}>
        <h3 className={styles.container__boxInfo___title}>{title}</h3>
        {content === 'github.com/thiago-mfernandes' 
          ? <p>
            <a href="https://github.com/thiago-mfernandes" target="_blank" rel="noreferrer">{content}</a>
          </p>
          : <p className={styles.container__boxInfo___content}>{content}</p>
        }
      </div>
    </div>
  );
}
