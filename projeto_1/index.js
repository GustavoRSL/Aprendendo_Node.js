const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Express ira usar o EJS como View Engines
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/perguntar", (req, res) =>{
  res.render("perguntar")
})

app.post("/enviar", (req, res) =>{
  const titulo = req.body.titulo
  const descricao = req.body.descricao
  res.send(`Titulo: ${titulo} Descrição: ${descricao}`)
})

app.listen(8080, ()=>{
  console.log("Servidor Iniciado!")
})