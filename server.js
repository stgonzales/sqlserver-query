const express = require('express')
const cors = require('cors')
const db = require('./database/conn')
require('dotenv').config()

const app = express()

app.use(cors())

const port = 3050

db.authenticate()
  .then(()=> console.log('Connected to database!'))
  .catch(err => console.log(`Erro: ${err}`))

app.get('/', (req, res) => {
  db.query("SELECT * FROM vw_contadorClientes", { type: db.QueryTypes.SELECT})
  .then(result => {
    res.send(result)
  })
  .catch(err => console.log(err))
})

app.listen(port, ()=> console.log(`Running on port ${port}!`))