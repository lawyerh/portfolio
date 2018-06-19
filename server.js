'use strict';

const express = require("express");
const bp = require("body-parser");
const nodeMailer = require("nodemailer");

const path = require("path");

const contactEmail = 'portfoliomailclient@gmail.com'

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: contactEmail,
        pass: 'notimportant'
    }
});


const app = express();
app.use(express.static(`${__dirname}/build`));

app.use(bp.json());

bp.urlencoded({extended: true});

app.post('/sendMail', (req, res) => {

    console.log(req.body);


    const mailOptions = {
        from: req.body.email,
        to: contactEmail,
        subject: req.body.name,
       text: `${req.body.email} says ${req.body.comments}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
          } else {
            console.log('Email sent: ' + info);
          }
    })


    res.json("success");
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/build/index.html") );
})




const port = process.env.PORT || 2000;
app.listen(port, () => { console.log(`Listening on port: ${port}`) } );