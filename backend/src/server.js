/*API em node funciona baseada em ROTA, quando acessar uma rota especifica, algo será executado.*/



// GET: buscar uma informação
// Post: criar uma informação
// PUT: editar uma informação por completo
// PATCH: modificar apenas uma parte da informação
// DELETE: deletar uma informação

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