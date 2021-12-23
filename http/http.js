const http = require('http')

http.createServer((req, res) => {
  res.end('<h1> Bem vindo ao servidor! <h1>')
}).listen(8181)
console.log('Sevidor rodando...')

