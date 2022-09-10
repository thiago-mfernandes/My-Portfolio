require('dotenv').config();

const express = require('express');
const path = require('path');
const nodemailer  = require('nodemailer');
const cors = require('cors');
const { response } = require('express');

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'smtp.gmail.com',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PSWD
  }
});

async function sendEmail(req, res) {

  try {

    const mailSent = {
      from: req.body.email, //remetente
      to: process.env.EMAIL_DESTINATION, //destinatario
      subject: `Assunto: ${req.body.subject}`, //assunto
      text: `
        Email enviado por ${req.body.name} 
        Email: ${req.body.email}
        ${req.body.message}
      `
    }

    transporter.sendMail(mailSent)
      .then((trans) => {
        return res.status(200).send('Sua mensagem foi enviada!');
    }).catch((error) => {
        return res.status(500).send('Houve um erro ao enviar e-mail. ' + error);
    });


  } catch {
    console.log('error =>', e.getMessage());
  }
}

//vou utilizar a porta http://locahost:5000/sendEmail para ouvir o frontend do axios
//la ele aponta pra cá: axios.post('http://localhost:5000/sendEmail', data,......

app.get('/server', (req, res) => {
  return res.json({message: 'okay'})
})

//
app.post('/sendEmail', sendEmail);

//ouvindo na porta 5000
app.listen(5000, () => {
  console.log(`Server online at port ${process.env.PORT}`)
})