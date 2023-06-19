const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host:"smtp.mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: "SSLv3"
    },
    auth: {
        user: "devtestbeta@outlook.fr",
        pass: "devTest9"
    }
})

const mailoption = {
    from: "devtestbeta@outlook.fr", 
    to: "aureliendestailleur@outlook.fr",
    subject: "EmailAuto",
    text: "test",
}

transporter.sendMail(mailoption, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Mail send' + info.response);
    } 
})