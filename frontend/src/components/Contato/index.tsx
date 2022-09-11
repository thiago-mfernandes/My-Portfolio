import styles from './Contato.module.scss';
import Info from './info';
import data from 'data/contatoInfo.json';
import { useState } from 'react';
import axios from 'axios';
import { DataForm } from 'Types/types';
import MessageStatus from './MessageStatus';

export default function Contato() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showStatusMessage, setShowStatusMessage] = useState(false);

  
  //obter os dados do formulario e enviar ao back-end
  function handleFormSubmit( event: React.FormEvent<HTMLFormElement> ) {
    
    event.preventDefault();

    const data: DataForm = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
    sendMessage(data);
  }

  async function sendMessage(data:DataForm) {
    try {
      axios.post('http://localhost:5000/sendEmail', data, {
        headers: {
          'Content-TYpe': 'application/json'
        }
      })
        .then(res => 
          res.status == 200
            ? handleShowStatusMessage() 
            : setShowStatusMessage(false)
        );
    } 
    catch (error) {
      console.error(error);
    }   
  }

  //exibir mensagem de status enviado ou nao enviado
  function handleShowStatusMessage() {
    setTimeout(() => {
      setShowStatusMessage(true);
    }, 1);
    setTimeout(() => {
      setShowStatusMessage(false);
    }, 5000);
  }


  return (
    <section className={styles.container} id='contato'>
      <div className={styles.container__formBox}>
        <h2 className={styles.container__formBox___title}>Entre em Contato</h2>
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
      </div>

      <form 
        className={styles.container__formBox___form}
        action="/sendEmail" 
        method='POST'
        onSubmit={handleFormSubmit}
      >
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setSubject(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {showStatusMessage && <MessageStatus />}
        <input type='submit' value='Enviar' className={styles.container__formBox___form____boxInput_____button}/>
      </form>




    </section>
  );
}
