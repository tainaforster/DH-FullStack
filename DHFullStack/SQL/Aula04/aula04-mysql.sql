/* criando tabela tb_funcionario para pratica de funcoes de agregacao */
create table tb_funcionario (
	id int(11) primary key not null auto_increment,
	nome varchar(50),
    data_admissao date,
    salario decimal(10,2)
);

/* desafio - inserir 15 registros a escolha de voces, para popular a tabela
tb_funcionario e conseguirmos atuar com as funcoes de agregacao, lembrem-se,
no caso da coluna salario, coloquem sempre valores diferentes para notar resultado
no momento da pratica */
insert into tb_funcionario (nome, data_admissao, salario) values 
('Funcionario 1', '2020-11-24', 1.000), ('Funcionario 2', '2020-11-24', 2.000), 
('Funcionario 3', '2020-11-24', 3.000), ('Funcionario 4', '2020-11-24', 4.000),
('Funcionario 5', '2020-11-24', 5.000), ('Funcionario 6', '2020-11-24', 6.000),
('Funcionario 7', '2020-11-24', 7.000), ('Funcionario 8', '2020-11-24', 8.000), 
('Funcionario 9', '2020-11-24', 9.000), ('Funcionario 10', '2020-11-24', 10.000),
('Funcionario 11', '2020-11-24', 11.000), ('Funcionario 12', '2020-11-24', 12.000), 
('Funcionario 13', '2020-11-24', 13.000), ('Funcionario 14', '2020-11-24', 14.000),
('Funcionario 15', '2020-11-24', 15.000);

/* funcoes de agregacao */
/* count - utilizada para efetuar uma soma e exibir a quantidade de registros em uma tabela */
/* count da tabela tb_funcionario */
select count(*) from tb_funcionario;

/* count da tabela tb_produto */
select count(*) from tb_produto;

/* truncate - utilizado para excluir todos registros de uma tabela e zerar a contagem do ID,
diferente da delete, se tiver mil registros ira eliminar os mil, e o primeiro registro inserido
apos o truncate, ira receber ID 1, como se a tabela fosse recente e nunca tivesse recebido registros */
truncate tb_funcionario;

/* desafio - inserir 15 registros com valores para a coluna salario seguindo o padrao necessario
para formatacao de dinheiro, que ao inves de 1.000 seria 1000, sem pontos */
insert into tb_funcionario (nome, data_admissao, salario) values 
('Funcionario 1', '2020-11-24', 1000), ('Funcionario 2', '2020-11-24', 2000), 
('Funcionario 3', '2020-11-24', 3000), ('Funcionario 4', '2020-11-24', 4000),
('Funcionario 5', '2020-11-24', 5000), ('Funcionario 6', '2020-11-24', 6000),
('Funcionario 7', '2020-11-24', 7000), ('Funcionario 8', '2020-11-24', 8000), 
('Funcionario 9', '2020-11-24', 9000), ('Funcionario 10', '2020-11-24', 10000),
('Funcionario 11', '2020-11-24', 11000), ('Funcionario 12', '2020-11-24', 12000), 
('Funcionario 13', '2020-11-24', 13000), ('Funcionario 14', '2020-11-24', 14000),
('Funcionario 15', '2020-11-24', 15000);

/* max - utilizada para retornar o maior valor de uma determinada coluna */
select max(salario) from tb_funcionario;

/* min - utilizada para retornar o menor valor de uma determinada coluna */
select min(salario) from tb_funcionario;

/* sum - utilizada para retornar a soma dos valores de uma determinada coluna */
select sum(salario) from tb_funcionario;

/* avg - utilizada para retornar a media aritmetica dos valores de uma determinada coluna */
select avg(salario) from tb_funcionario;

/* group by - utilizado para agrupar os registros exibidos de acordo com
um determinado criterio, no caso, e comum ser utilizado com funcoes de
agregacao */
/* agrupando produtos por regioes, utilizando a coluna id_regional */
select count(*), id_regional from tb_produto
group by id_regional;

/* desafio - contar o numero de produtos que temos por estado */
select count(*), uf from tb_produto
group by uf;



/* desafio - criar uma tabela de clientes para conseguirmos criar um vinculos
entre os clientes e os produtos de interesse de cada cliente, que no futuro,
iremos trabalhar com consultas avancadas envolvendo as tabelas:
tb_cliente e tb_produto */
CREATE TABLE tb_cliente (
  id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome varchar(60) DEFAULT NULL,
  id_produto int(11)
);
 
/* desafio - inserir registros na tabela tb_cliente para pratica de joins */
insert into tb_cliente (nome, id_produto) values 
('Nome 1', null), ('Nome 2', null), ('Nome 3', null), ('Nome 4', null),
('Nome 5', 1), ('Nome 6', 1), ('Nome 7', 2), ('Nome 8', 3),
('Nome 9', 4), ('Nome 10', 4), ('Nome 11', 5), ('Nome 12', 5),
('Nome 13', 6), ('Nome 14', 6), ('Nome 15', 6), ('Nome 16', 6);

/* joins - a principal utilizacao de joins e para unir valores de colunas
de tabelas distintas, ou seja, em uma mesma consulta iremos exibir valores
de colunas de uma Tabela A e tambem de uma Tabela B */

/* inner join - exibe na consulta apenas valores que possuam referencia,
no caso, como estamos buscando exibir uma consulta de valores das tabelas
tb_cliente e tb_produto precisamos buscar uma coluna que seja a chave 
estrangeira e eventualmente tenha uma relacao entre as tabelas,
que sera a coluna id_produto, onde na tabela tb_cliente e chave estrangeira */
select c.nome, p.produto from tb_cliente as c
inner join tb_produto as p on (c.id_produto = p.id_produto);


/* left join - exibe na consulta todos valores da tabela que esta a esquerda
que no caso e a tabela que vem apos o select,
no caso, como estamos buscando exibir uma consulta de valores da tabela
tb_cliente que e a tabela (que esta a esquerda apos o select), 
ele ira listar todos os registros da tabela tb_cliente e caso o valor informado
na coluna id_produto da tabela tb_cliente possuir relacao com algum valor da coluna
id_produto da tabela tb_produto, entao, ira exibir as informacoes do produto, 
caso contrario retornara null para p.produto */
select c.nome, p.produto from tb_cliente as c
left join tb_produto as p on (c.id_produto = p.id_produto);

/* right join - exibe na consulta todos valores da tabela que esta a direita
que no caso e a tabela que vem apos o right join,
no caso, como estamos buscando exibir uma consulta de valores da tabela
tb_produto que e a tabela (que esta a direita apos o right join), 
ele ira listar todos os registros da tabela tb_produto e caso o valor informado
na coluna id_produto da tabela tb_produto possuir relacao com algum valor da coluna
id_produto da tabela tb_cliente, entao, ira exibir as informacoes do cliente, 
caso contrario retornara null para c.nome */
select c.nome, p.produto from tb_cliente as c
right join tb_produto as p on (c.id_produto = p.id_produto);