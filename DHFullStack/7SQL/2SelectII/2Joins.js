// JOINS

// Alem de fazer consultas dentre de uma tabela ou a muitas tabelas atraves de REFERENCIA A TABELAS,
//  tambem é possivel e necessario fazer consultas a diferentes tabelas, e vincular esses resultados
//  com JOINS.

// Enquanto eles servem a mesma funçao que a REFERENCIA DA TABELA, JOINS:
// >> Eles proporcionam certas flexibilidades adicionais
// >> A sua sintaxe é muito mais usada
// >> Tem melhor desempenho. 



// INNER JOINS

// Vai fazer uma cruz entre duas tabuas. Se cruzassemos as tabelas de CLIENTES e VENDAS e houvesse um
//  cliente sem vendas, INNER JOIN  nao traria esse cliente como resultado



// LEFT JOIN - RIGHT JOIN

//  Estes tipos de Joins NAO EXCLUEM os resultados de nenhuma das tabelas. Se houvesse clientes sem
//  vendas, poderiamos inclui-los no resultado usando LEFT JOIN JOIN ou RIGHT JOIN.



//   *Antes escreviamos:

//  SELECT clientes.id AS id, clientes.nome, vendas.data
//  FROM clintes, vendas

//   *** Agora escrevemos:

//  SELECT clientes.id AS id, clientes.nome, vendas.data
//  FROM clintes
//  INNER JOIN vendas

// Ainda precisamos esclarecer qual a chave primaria (PK) será CRUZADA com qual chave estrangeira (FK).

// A sintaxe Join nao usa o Where, mas requer a palavra ON. É ai que indicaremos o filtro. Significa
//  que o que costumavamos escrever Where agora vamos escrever ON.

//  SELECT clientes.id AS id, clientes.nome, vendas.data
//  FROM clintes
//  INNER JOIN vendas
//  ON clientes.id =  vendas.cliente_id



// E se quisermos incluir no resultado os clientes que nao tem vendas associadas?

// Para incluir os clientes sem vendas basta mudar o INNER JOIN por LEFT JOIN, ele incluira todos os
//  registros da primeira tabela da consulta (a tabela esquerda) incluindo quando nao tenha 
//  coincidencia com a tabela da direita.

//                              CLIENTES---------VENDAS


// E para incluir no resultado aquelas vendas que NAO tem clientes associados?

// Para incluir essas vendas sem clientes basta mudar o LEFT JOIN por RIGHT JOIN, ele incluira todos 
//  os registros da tabela certa. Se olharmos para a consulta, a tabela de vendas aparece apos a 
//  tabela do cliente, à direita. 

//  SELECT clientes.id AS id, clientes.nome, vendas.data
//  FROM clintes
//  RIGHT JOIN vendas
//  ON clientes.id =  vendas.cliente_id




//  RELACIONANDO MUITAS TABELAS:

// O exemplo a seguir mostra como relacionar muitas tabelas em uma unica consulta usando JOINS.

//  SELECT clientes.id AS id, clientes.nome, vendas.data
//  FROM clintes
//  INNER JOIN vendas
//  ON clientes.id =  vendas.cliente_id
//  INNER JOIN produtos
//  ON produtos.id =  vendas.produto_id





