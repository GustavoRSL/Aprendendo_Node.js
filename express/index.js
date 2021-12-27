const express = require('express') //Importando o express
const app = express()              // Iniciando express

// Sempre devolver algo pelo res e somente uma vez
app.get('/', (req, res) => {
  res.send("Bem vindo ao servidor!")
})

app.get("/blog", (req, res) => {
  res.send("Bem vindo ao blog!")
})

app.get("/canal", (req, res) => {
  res.send("Bem vindo ao canal!")
})

app.get("/ola/:nome/:empresa?", (req, res) => {
  // Req => Dados enviados ao usuário
  // Res => Resposta que vai ser enviada ao usuário
  var nome = req.params.nome
  var empresa = req.params.empresa
  // QueryParams ?ex=exemplo necessita da "?"
  var exemplo = req.query['exemplo']
  if(exemplo){
    res.send(exemplo)
  }
  else if (empresa) {
    res.send(`Olá, ${nome} que trabalha na empresa ${empresa}`)
  }
  else {
    res.send(`Olá, ${nome}`)
  }

})



app.listen(4000, (err) => {
  if (err) {
    console.log('Ocorreu um erro!')
  }
  else {
    console.log('Servidor rodando...')
  }
})


