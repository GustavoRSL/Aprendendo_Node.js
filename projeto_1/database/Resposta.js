const sequelize = require('sequelize')
const connection = require('./db')

const Resposta = connection.define("respostas", {
  corpo: {
    type: sequelize.TEXT,
    allowNULL: false
  },
  perguntaId: {
    type: sequelize.INTEGER,
    allowNULL: false
  }
})

Resposta.sync({force: false})

module.exports = Resposta