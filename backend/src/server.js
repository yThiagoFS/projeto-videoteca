

require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const connectionToDB = require('./database')
const cors = require('cors')
connectionToDB()


const port = 3333
const app = express()

app.use(cors())

app.use(express.json())
app.use(routes)
app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`)
})
