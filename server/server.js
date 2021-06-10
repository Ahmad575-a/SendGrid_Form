const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail');

// client connection
const cors = require('cors')
//! MongoDB and dotenv
require('dotenv').config()

const PORT = process.env.PORT || 8000;


app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json('hello')
})

app.post('/contact/email', (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { name, email, message, title } = req.body
    const msg = {
        to: 'a.alghetheth@gmail.com',
        from: 'a.alghetheth@gmail.com',
        subject: req.body.title,
        templateId: process.env.templateId,
        dynamicTemplateData: {
            name,
            email,
            message,
            title
        }

    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email Successfully sent!')
            res.json('Email Successfully sent.')
        })
        .catch(err => console.log(err))
})


//! listen app with port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})