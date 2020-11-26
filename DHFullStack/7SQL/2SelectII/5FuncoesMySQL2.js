// FUNÇOES DE AGREGAÇAO


// Tem a peculiaridade de não operar em cada uma das linhas, mas gerar uma informaçao.
// Se usar uma uma funçao de agregaçao um uma tabela obteremos um unico dado de toda tabela.

// As funçoes de agregaçao realizam calculos sobre um conjunto de dados e retornam um unico
//  resultado. Exceto o COUNT, as funçoes de agregaçao ignoram valores NULL.

// Existem apenas 5 funçoes de agregaçao:



// *** COUNT () - retorna o número de linhas que corresponde a um determinado critério.

// SELECT COUNT (*) FROM movies;
// >> Retornará a quantidade de registros na tabela movies.

// SELECT COUNT (id) AS total FROM movies WHERE genero_id = 3;
// >> Retornará a quantidade de filmes da tabela movies com o genero_id 3 em uma coluna chamada total.



// *** MAX - analisa um conjunto de valores e retorna o maior entre eles.

// SELECT MAX (rating) FROM movies;
// >> Retornará rating do filme melhor ranqueado.



// *** MIN () - analisa um conjunto de valores e retorna o menor entre eles.

// SELECT MIN (rating) FROM movies;
// >> Retornará rating do filme menos ranqueado.



// *** AVG () - podemos calcular a média aritmética dos valores em uma única coluna.

// SELECT AVG (rating) FROM movies;
// >> Retornará a media do rating dos filmes da tabela 'movies'.



// *** SUM () - realiza a soma dos valores em uma única coluna e retorna esse resultado

// SELECT SUM (length) FROM movies;
// >> Retornará a soma das duraçoes dos filmes da tabela 'movies'.