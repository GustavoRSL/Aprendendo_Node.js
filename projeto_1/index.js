const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/db')
const perguntaModel = require('./database/pergunta')
const pergunta = require('./database/pergunta')
const Resposta = require('./database/Resposta')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão realizada com sucesso!")
  })
  .catch((err) => {
    console.log(err)
  })


// Express ira usar o EJS como View Engines
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get("/", (req, res) => {
  pergunta.findAll({
    raw: true, order: [
      ['id', 'DESC']
    ]
  }).then(perguntas => {
    res.render("index", {
      perguntas: perguntas
    })
  })
})

app.get("/perguntar", (req, res) => {
  res.render("perguntar")
})

app.post("/enviar", (req, res) => {
  const titulo = req.body.titulo
  const descricao = req.body.descricao
  pergunta.create({
    title: titulo,
    description: descricao
  }).then(() => {
    res.redirect("/")
  })
})

app.get('/pergunta/:id', (req, res) => {
  const id = req.params.id
  pergunta.findOne({
    where: { id: id }
  }).then(pergunta => {
    if (pergunta != undefined) {
      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [['id','DESC']]
      }).then(respostas => {
        res.render('pergunta', {
          pergunta: pergunta,
          respostas: respostas
        })
      })

    } else {
      res.redirect('/')
    }
  })
})

app.post("/responder", (req, res) => {
  const corpo = req.body.corpo
  const perguntaId = req.body.pergunta
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect(`/pergunta/${perguntaId}`)
  })
})

app.listen(8080, () => {
  console.log("Servidor Iniciado!")
})