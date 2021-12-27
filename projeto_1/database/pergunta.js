const sequelize = require('sequelize')
const connection = require('./db')

const pergunta = connection.define('pergunta', {
  title: {
    type: sequelize.STRING,
    allowNull: false
  },
  description: {
    type: sequelize.TEXT,
    allowNull: false
  }
})

pergunta.sync({ force: false }).then(() => console.log('Tabela criada com sucesso!'))

module.exports = pergunta