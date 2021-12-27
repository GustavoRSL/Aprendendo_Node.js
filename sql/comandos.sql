// Comandos
mysql -h localhost -u root -p                  // Login 
show databases;                                // Mostrar os banco de dados
create database ${nomedatabela};               // Criar um banco de dados
use ${nomedatabela};                           // Selecionar um banco de dados
describe ${nomedatabela};                      // Mostrar informações do banco de dados

// Exemplo de como criar uma tabela com informações
create table usuarios(
  nome varchar(50),
  email varchar(100),
  idade int
);

// Inserir dados
insert into usuarios(nome, email, idade) values(
  "Gustavo", 
  "Gustavo@gmail.com", 
  21
);

// Visualizar dados
select ${dado} from ${nomedatabela};
select * from usuarios;                         // Exemplo para trazer todos os dados da tabela.

// Consultar dados
select ${dado} from ${nomedatabela} where ${condicao};
select * from usuarios where idade = 8;         // Exemplo para trazer usuarios com idade de 8 anos.

// Deletar dados
delete from ${nomedatabela};
delete from usuarios;                            // Exemplo que deleta toda tabela usuarios.

delete from ${nomedatabela} where ${nome da coluna}; = ${valor do campo}
delete from usuarios where nome = "Gustavo";     // Exemplo para deletar usuarios com nome Gustavo.


// Atualizar dados
update ${nomedatabela} set ${nome da coluna} = ${valor} where ${nome da coluna} = ${valor};
update usuarios set nome = "Teste" where nome = Gustavo;