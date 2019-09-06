require('dotenv').config()
const express = require('express')
const massive = require('massive')
const chalk = require('chalk')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(chalk.blue('Database Connected 🦄'))
}).catch(error => console.log(chalk.bgRed('Database Connection Failed', error)))

app.listen(SERVER_PORT, () => console.log(chalk.cyan(`Listening on port ${SERVER_PORT} 🚀`)))