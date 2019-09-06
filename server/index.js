require('dotenv').config()
const express = require('express')
const massive = require('massive')
const chalk = require('chalk')
const session = require('express-session')

const authCtrl = require('./controllers/auth_controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000
    }
    }))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(chalk.blue('Database Connected 🦄'))
}).catch(error => console.log(chalk.bgRed('Database Connection Failed', error)))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

app.listen(SERVER_PORT, () => console.log(chalk.cyan(`Listening on port ${SERVER_PORT} 🚀`)))