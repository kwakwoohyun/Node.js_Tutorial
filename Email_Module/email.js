/*
    Nodemailer 모듈
    Nodemailer 모듈을 사용하면 컴퓨터에서 이메일을 쉽게 보낼 수 있다. 
    Nodemailer 모듈은 NPM을 사용하여 설치한다. 
    $ npm install nodemailer
*/
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hi.kwakwoohyun@gmail.com',
        pass: 'secret' // google account -> security -> app password 
    }
});

var mailOption = {
    from: 'hi.kwakwoohyun@gmail.com',
    to: 'kwakwoohyun010@gmail.com, kwak@buyaladdinrnd.com', // 2명에게 보낼때 ( , )쉼표로 구분
    subject: 'Sending Email using Node.js',
    // text: 'That is great!',
    // html로 보낼때
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOption, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent: ' + info.response);
    }
});