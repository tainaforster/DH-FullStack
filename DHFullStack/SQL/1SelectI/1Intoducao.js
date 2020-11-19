// Introdução á Banco de Dados


// SGBD - Sistema de Gerenciamento de Banco de Dados

// SQL - Linguagem de Consulta Estruturada


// Por motivo de segurança, controle, escalabilidade e poder de consulta é que surgiram os 
// bancos de dados.
// Permitem modelar, salvar e *consultar* dados importantes. >> Armazenar, Acesso, Manipular e Analisar.
// É um recurso que nos permite armazenar informaçoes. Quase qualquer sistema que operamos requer
// o armazenamento de dados para recupera-los posteriormente.

// Para varios projetos é usado varios bancos de dados
// Podemos ter mais de um banco de dados no mesmo projeto.

// O banco de dados fica hospedado em um servidor. No entanto, quando queremos conectar temos que ser
// claros sobre varias caracteristicas adicionais.

// caracteristicas adicionais:

// 1- Nome do banco de dados;
// 2- Em qual servidor está (em que endereço IP);
// 3- Tipo de banco de dados;
// 4- Usuario;
// 5- Senha;
// 6- Porta;

// Porta - Podemos pensar que cada website mora em um servidor. No servidor pode haver varios 
// departamentos: Web, Benco de dados, Cash... A porta seria algo como o numero do departamento.
// É por isso que cada serviço dentro de um servidor tem uma porta associada.
// Desse modo no mesmo servidor poderia estar a parte na porta 80 (Node), e um servidor de banco
// de dados na porta 3306, isso é configuravel de qualquer maneira.

// Iremos nos conectar ao banco de dados atraves de um sistema de gerenciamento de banco de dados:

// *** Relacionados: ***
// 1- Mysql;
// 2- Postgresql;
// 3- Oracle;
// 4- DB2.

// Nao relacionados:
// 1- Mongo;
// 2- Redis;
// 3- Cassandra.

// SQL - Stuctured Query Language (Linguagem de Consulta Estruturada)

// MySQL - Mecanismo de banco de dados mais semelhante a sintaxe do padrao SQL, ou seja, ela se
// adapta a qualquer sistema do tipo SQL: DB2, Oracle, PostegreSQL, entre outros.



// Como as informaçoes serao organizadas:

// Dentro do nosso banco de dados SQL teremos um conjunto de tabelas (como no excel), onde em cada 
// tabela teremos infornaçoes agrupadas de acordo com os dados especificos.

// Cada coluna armazena um tipo de dado

//  Todas as tabelas em um banco de dados tem pelo menos uma CHAVE PRIMARIA, que é um dado ou um 
// conjunto exclusivo para cada uma das linhas e é isso que permite que uma linha seja diferenciada
// da outra.

// É muito comum que a maioria das tabelas do SQL tenha uma coluna agregada chamada ID, é uma coluna
// que ira agregar autimaticamente cada numero das linhas, a ideia é garantir que tenhamos dados 
// exclusivos para cada uma de nossas fileiras. 


//  Caracteristicas principais:
// * Multiplataforma - Funciona em Unix, Windowns, Mac, e outros sistemas;
// * Padrao SQL - Tipos de dados, condificacao, unioes.
// * Open Source - Adaptable a diversas necessidades.
// * Relacional - Padronizaçao, integridade de referencia.
// * Velocidade - Transiçoes rapidas.
// * Multiconecxoes - Segurança multi-tarefa, multiplos usuarios.



// Como conectar ao MySQL:

// Por linha de comando:  mysql --user root --password

// Por linguagens de programaçao:
const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password',
{
    host: 'localhost',
    dialect: 'mysql',
})

