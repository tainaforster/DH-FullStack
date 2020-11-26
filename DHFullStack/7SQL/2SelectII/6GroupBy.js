// GROUP BY


//  É usado para AGRUPAR REGISTROS da tabela resultante de uma consulta por uma ou mais colunas.

// Sintaxe:

// SELECT coluna_nome (s)
// FROM tabela_nome
// WHERE condiçao
// GROUP BY coluna_nome (s)

// Como o GROUP BY agrupa a informaçao, perdemos o detalhe de cada uma das linhas. Ou seja, nao
//  estamos mais inbteressados no valor de cada linha, mas sim no resultado consolidado entre 
//  todas as linhas.
// Portanto, ao usar GROUP BY, nos campos mostrados no SELECT, podemos apenas indicar:
//   - Dados agrupados;
//   - Funçors de agregaçao 


// Exemplo:

// SELECT marca, MAX (preco)
// FROM carros
// GROUP BY marca;


// SELECT genero.nome, AVG (duracao)
// FROM filmes
// INNER JOIN generos ON generos.id = genero_id
// GROUP BY genero.nome;