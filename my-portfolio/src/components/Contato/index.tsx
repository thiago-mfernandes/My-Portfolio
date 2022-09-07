import styles from './Contato.module.scss';
import Info from './info';
import data from 'data/contatoInfo.json';

export default function Contato() {
  return (
    <section className={styles.container}>
      <div className={styles.container__formBox}>
        <h2 className={styles.container__formBox___title}>Entre em Contato</h2>
        <form action="" className={styles.container__formBox___form}>
          <div className={styles.container__formBox___form____boxInput}>
            <label 
              htmlFor='name' 
              className={styles.container__formBox___form____boxInput_____label}>
                Nome
            </label>
            <input 
              name='name' 
              type='text' 
              placeholder='Nome..' 
              required
              className={styles.container__formBox___form____boxInput_____input}
            />
          </div>
          <div className={styles.container__formBox___form____boxInput}>
            <label 
              htmlFor='email' 
              className={styles.container__formBox___form____boxInput_____label}>
                Email
            </label>
            <input 
              name='email' 
              type='email' 
              placeholder='nome@dominio.com.br' 
              required 
              className={styles.container__formBox___form____boxInput_____input}
            />
          </div>
          <div className={styles.container__formBox___form____boxInput}>
            <label 
              htmlFor='assunto' 
              className={styles.container__formBox___form____boxInput_____label}>
                Assunto
            </label>
            <input 
              name='assunto' 
              type='subject' 
              placeholder='Assunto..' 
              required 
              className={styles.container__formBox___form____boxInput_____input}
            />
          </div>
          <div className={styles.container__formBox___form____boxInput}>
            <label 
              htmlFor='message' 
              className={styles.container__formBox___form____boxInput_____label}>
                Mensagem
            </label>
            <textarea 
              name='message' 
              placeholder='Mensagem..' 
              required
              className={styles.container__formBox___form____boxInput_____input}
              minLength={2}
              maxLength={250}
              cols={30}
              rows={4}
            ></textarea>
          </div>
          <input type='submit' value='Enviar' className={styles.container__formBox___form____boxInput_____button}/>
        </form>
      </div>

      <div className={styles.container__socialMedia}>{/* container amarelo */}
        <h2 className={styles.container__socialMedia___title}>Vamos conversar?</h2>
        <p className={styles.container__socialMedia___content}>Tenho o bom e velho formulário, você já sabe como funciona: só preencher tudo e em breve respondeirei seu contato!</p>

        {
          data.map((item, index) => (
            <Info 
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))
        }
      </div>
    </section>
  );
}
