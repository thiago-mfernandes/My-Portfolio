import styles from './Contato.module.scss';

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
                Name
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
              placeholder='Email..' 
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
          <input type='submit' value='Enviar'/>
        </form>
      </div>

      <div className={styles.container__socialMedia}>{/* container amarelo */}
        <h2 className={styles.container__socialMedia___title}>Para falar comigo:</h2>
        <p className={styles.container__socialMedia___content}>Tenho o bom e velho formulário, você já sabe como funciona: só preencher tudo e em breve respondeirei seu contato!</p>
        <div>
          <div>{/* div redonda para icone */}
            <i>icone ilustrativo</i>
          </div>
          <div>{/*div com o texto */}
            <span>Localização</span>
            <p>Piracicaba - SP - Brazil</p>
          </div>
        </div>
        <div>
          <div>{/* div redonda para icone */}
            <i>icone ilustrativo</i>
          </div>
          <div>{/*div com o texto */}
            <span>Localização</span>
            <p>Piracicaba - SP - Brazil</p>
          </div>
        </div>
        <div>
          <div>{/* div redonda para icone */}
            <i>icone ilustrativo</i>
          </div>
          <div>{/*div com o texto */}
            <span>Localização</span>
            <p>Piracicaba - SP - Brazil</p>
          </div>
        </div><div>
          <div>{/* div redonda para icone */}
            <i>icone ilustrativo</i>
          </div>
          <div>{/*div com o texto */}
            <span>Localização</span>
            <p>Piracicaba - SP - Brazil</p>
          </div>
        </div>
      </div>
    </section>
  );
}
