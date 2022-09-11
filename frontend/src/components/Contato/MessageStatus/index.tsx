import styles from './MessageStatus.module.scss';


export default function MessageStatus() {

  return (
    <div className={styles.container}>
      <span className={styles.container__span}>
        Mensagem enviada com sucesso!
      </span>
    </div>
  );
}
