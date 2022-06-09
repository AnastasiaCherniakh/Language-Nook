const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const res = require('express/lib/response');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/views/index.html");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/', (req,res)=> {
  const output=`
  <p>Новий студент Language Nook</p>
  <h3>Контакти:</h3>
  <ul>
    <li>Ім\'я: ${req.body.name}</li>
    <li>Телефон: ${req.body.telephone}</li>
    <li>Email: ${req.body.email}</li>
  </ul>`;


let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.APP_PASS,
  },
});

let mailOptions = {
  from: '"Новий студент" <testlanguagenook@gmail.com>',
  to: 'laanguagenook@gmail.com',
  subject: 'Контакти Language Nook студента ',
  html: output
};

transporter.sendMail(mailOptions,(error,info)=>{
  if(error) {
    console.log(error);
    res.send(error);
  }else {
    console.log('Message sent: %s', info.response);
    res.send("success");
  }
});
});

const port = process.env.PORT || 3000;
const server = app.listen(port,listening);
function listening (){
    console.log(`server running on ${port}`)
  }
