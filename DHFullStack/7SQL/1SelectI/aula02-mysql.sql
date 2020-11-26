/* criando banco de dados */
CREATE DATABASE dh_node_fs10;
      
/* indicando qual banco de dados iremos trabalhar */
USE dh_node_fs10;

/* coluna ID sendo inteira e com capacidade de receber 11 digitos, sendo PK
coluna nome sendo texto ate 50 digitos
coluna sobrenome sendo texto ate 50 digitos
coluna email sendo texto ate 50 digitos */
CREATE TABLE teste (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
nome VARCHAR (50),
sobrenome VARCHAR (50),
email VARCHAR (50)
);

/* criar coluna data_cadastro na tabela teste que tenha tupo primitivo DATE*/
ALTER TABLE teste
ADD data_cadastro DATE;

/* descrevendo informaçoes da tabela teste */
DESCRIBE teste;

/* alterar o tipo primitivo da coluna data_cadastro de DATE para DATETIME */
ALTER TABLE teste MODIFY data_cadastro DATETIME;

/* alterar o nome da coluna sobrenome para telefone e o tipo primitivo de varchar(50)
para varchar(15) */
ALTER TABLE teste CHANGE sobrenome telefone VARCHAR (15);

/* alterar o nome da tabela teste para clientes */
ALTER TABLE teste RENAME TO clientes;

/* descrevendo informacoes da tabela clientes */
describe clientes;

/* elimine a coluna data_cadastro */
ALTER TABLE clientes DROP data_cadastro;

/* exclua a tabela clientes */
/* DROP TABLE clientes; */

/* exclua o banco de dados dh_node_fs10 */
/* DROP DATABASE dh_node_fs10; */

