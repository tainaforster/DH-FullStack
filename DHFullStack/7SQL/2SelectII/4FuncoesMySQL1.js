// FUNÇOES MY SQL I

// O MySQL traz um conjunto de funçoes que ja estao implementadas em seu mecanismo para operar os 
// resultados de diferentes formas.



// Funçoes:


// *** CONCAT - usamos para concatenar duas ou mais expressoes.
    
// SELECT CONCAT ('Nome: ', first_name, ' ', last_name)
// FROM actors;
// >> 'Nome: Emilia Clarke'


// *** COALESCE - para obter a primeira expressao que não é NULL

// SELECT COALESCE (NULL, 1, 20, 'Digital House');
// >> 1

// SELECT COALESCE (NULL, NULL, 'Digital House');
// >> 'Digital House'


// *** DATEDIFF - Calcula a diferença entre as datas DATA2 e DATA1, retornando o resultado como um
//                inteiro, vujo a unidade é definida pelo valor da unidade.

// SELECT DATEDIFF (hora, '2017/08/25 07:00', '2017/08/25 12:45' );
// >> 5
// (Devolve 5 poeque é o numero de horas entre 7 e 12:45. Nos retorna um resultado aproximado)

// SELECT DATEDIFF (minuto, '2017/08/25 07:00', '2017/08/25 12:45' );
// >> 345
// (Devolve 345 poeque é o numero de minutos entre 7 e 12:45. Nos retorna um resultado aproximado
//  300min + 45min)


// *** EXTRACT - usamos para extrair parte de uma data.

// SELECT EXTRACT (SECOND FROM '2014-02-13 08:44:21')
// >> 21

// SELECT EXTRACT (MINUTE FROM '2014-02-13 08:44:21')
// >> 44

// SELECT EXTRACT (HOUR FROM '2014-02-13 08:44:21')
// >> 8

// SELECT EXTRACT (DAY FROM '2014-02-13 08:44:21')
// >> 13

// ... E varios outros...


// *** REPLACE - Usamos para substituir uma sequencia de caracteres por outra numa cadeia.

// SELECT REPLACE ('abc abc', 'a', 'B')
// >> 'Bbc Bbc'

// SELECT REPLACE ('123 123', '2', '5')
// >> '153 153'


// *** DATA_FORMAT - usamos o % para avaluar as condiçoes, e devolvemos a primeira que for
//                   cumprida.

// SELECT DATA_FORMAT ('2017-06-15', %Y)  - quando for ano o Y SEMPRE em maiusculo.
//  >> '2017'

// SELECT DATA_FORMAT ('2017-06-15', %W %M %Y) 
//  >> 'Thursday June 15 2017'


// *** CASE - Utilizamos para avaliar as condiçoes e devolver a PRIMEIRA que for cumprida.

// Neste exemplo a tabela resultante terá 4 colunas: id, title, rating, rating_categories. Este
//  ultimo vai mostrar 'ruim', 'regular', etc, de acordo com a classificaçao do filme.

// SELECT id, title, rating
//   CASE 
//     WHEN rating < 4 THEN 'Ruim'
//     WHEN rating < 6 THEN 'Regular'
//     WHEN rating < 8 THEN 'Bom'
//     WHEN rating < 9.5 THEN 'Muito bom'
//     ELSE 'Excelente'
//   END AS rating_categories
// FROM movies
// ORDER BY rating;