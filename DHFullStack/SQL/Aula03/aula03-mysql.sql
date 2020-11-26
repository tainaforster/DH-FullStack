/* desabilitando verificacao de chave estrangeira para inserir produtos
sem ter necessidade de ter todas tabelas estrangeiras relacionadas */
set foreign_key_checks = 0;

/* inserindo registro na tabela tb_produto */
insert into tb_produto (produto, descricao, cep, logradouro, numero,
complemento, uf, cidade, bairro, ativo, excluido, id_finalidade) 
values ('Produto criado com turma 10', 'Produto criado com intuito de fazer
um insert com a galera da turma 10', '02672-070', 'Rua Rio Itapiçu', '100',
'casa com portão laranja', 'SP', 'São Paulo', 'Jardim Santa Cruz', 1, 0, 1);

/* criando consulta para exibir todas colunas da tabela produto */
select * from tb_produto;

/* criar consulta para exibir as seguintes colunas: produto, descricao, cep, 
logradouro, numero, complemento, uf, cidade, bairro, ativo e excluido */
select produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido from tb_produto;

/* clausula where - conseguimos aplicar um filtro com a clausula where
informando algumas condicoes, no caso abaixo, iremos filtrar por cep 02672-070 */
select produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido from tb_produto
where cep = '02672-070';

/* criar consulta para exibir todos os produtos da cidade de São Paulo
que estejam ativos */
select produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido from tb_produto
where cidade = 'São Paulo' and ativo = 1;

/* between - indicamos um intervalo onde queremos aplicar um filtro,
muito visto com datas, para pegar um intervalo entre um mes e outro,
ou, ate mesmo, entre um ano e outro, podendo ser tambem entre id 1 e id 100 
que e caso da consulta abaixo */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
where id_produto between 1 and 100;

/* criar consulta para exibir produtos que foram cadastrados de 19-11-2019
ate 19-11-2020, lembrando que esses produtos devem estar ativos */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
where data_cadastro between '2019-11-19' and '2020-11-11' and ativo = 1;

/* like - efetua busca por sequencia de caracteres, ou seja, buscamos filtrar
atraves de algumas letras, ou, ate mesmo uma sequencia de letras que queremos
encontrar um registro. O like possui uma combinacao que pode ser utilizada 
para facilitar a busca e ignorar alguns caracteres, no caso, chamamos de coringa,
e o caracter e o % */

/* 1ª forma de like - buscando palavras que contenham a letra A no inicio */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
where produto like 'a%';

/* 2ª forma de like - buscando palavras que contenham a letra A no final */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
where produto like '%a';

/* 3ª forma de like - buscando palavras que contenham a letra A, independente
de onde esteja posicionada a letra A, podendo ser no inicio, meio e final */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
where produto like '%a%';

/* criar uma consulta que encontre produtos contendo a letra A na segunda posicao */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
where produto like '_a%';

/* in - nos possibilita criar uma consulta informando apenas os valores 
que desejamos filtrar sem necessidade de pegar um intervalo como between faz */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
where id_produto in (10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

/* order by - ordena de forma crescente (asc) ou decrescente (desc)
se for coluna numerica, ou, se for colunas contendo textos 
ordena de A-Z (asc) e Z-A (desc) */

/* criar uma consulta para ordernar do produto mais novo para o mais velho,
levando em consideracao a coluna id_produto */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
order by id_produto desc;

/* criar uma consulta para ordernar os produtos de A a Z,
levando em consideracao a coluna produto */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
order by produto asc;

/* limit - limitar quantidade de registros que serao exibidos */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
limit 10;

/* criar consulta para exibir apenas os ultimos dez produtos */
select id_produto, produto, descricao, cep, logradouro, numero, complemento, uf, 
cidade, bairro, ativo, excluido, data_cadastro from tb_produto
order by id_produto desc
limit 10;

/* update - com update conseguimos alterar os valores das colunas,
lembrando que nunca devemos fazer update sem where, pois, iremos
alterar todos registros para o mesmo valor que estaremos passando no update.
Inclusive a forma mais segura de efetuar update e com o id sendo informado */
update tb_produto
set produto = 'Produto show de jarbas', cep = '02672-030'
where id_produto = 1678;

/* delete - excluir um registro, lembrando que nunca devemos fazer delete sem where,
pois, iremos excluir todos registros existirem na tabela.
Inclusive a forma mais segura de efetuar delete e com o id sendo informado */
delete from tb_produto
where id_produto = 1678;

/* como inativar o produto inves de excluir */
update tb_produto 
set ativo = 0, excluido = 1
where id_produto = 1673;
