// DISTINCT


// O DISTINCT retorna valores unicos.
// Em uma tabela, uma coluna pode conter valores duolicados e, as vezes, apenas uma lista com valores
// diferentes é necessaria, ou seja, aqueles que sao repetidos nao aparecem. 

//  Exemplo:

//  A partir de uma tabela usuarios, se executarmos a consulta:

//   SELECT pais FROM usuarios;
// Obteriamos:
//  Peru, Peru, Brasil, França, Brasil

// Existem cenarios em que vamos precisar obter apenas os DIFERENTES valores que aparecem em uma 
//  coluna. Adicionando o DISTINCT na consulta:

//   SELECT DISTINCT pais FROM usuarios;
// Obteriamos:
//  Peru, Brasil, França

// -----------------------------------------------------------------------------------------------

//   SELECT DISTINCT actors.first_name, actors.last_name
//   FROM actors
//   INNER JOIN actor_movie ON actors.id = actor.movie.actor_id
//   INNER JOIN movies ON movies.id = actor_movie.movie_id
//   WHERE movies.title LIKE '%Harry Potter%';

//  Neste exemplo, vemos uma query que solicita os atores que atuatam em qualquer filme de Harry Potter
//  Se nao escrevessemos o DISTINCT, os atores que participaram de mais de um filme apareceriam
//  repetidos no resultado.

