const sequelize = require('sequelize')

const connection = new sequelize('forumperguntas','root','123456',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection