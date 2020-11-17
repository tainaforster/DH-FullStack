// Tipos de Dados


// Os bancos de dados são otimizados para salvar informações. Há momentos em que queremos salvar 
// dados numéricos e outros em que queremos salvar strings de texto.

// Ao criar tabelas cada uma das colunas sao associadas a um tipo de dado, tipos inerentes a uma SQL.
// Cada tipo de dados tem um tamanho determinado e quanto mais precisao colocarmos a este tipo de 
// dados, mais rapido e mais performante o MySQL funcionará.


// Tipos de dados que uma SQL oferece:

// * Dados numericos:
//   > INT - numeros inteiros;
//   > TINYINT - numeros de 1 a 10
//   > SMALLINT - numeros
//   > MEDUIMINT - 
//   > BIGINT - numeros
//   > DECIMAL - numeros decimais, é recomendado o decimal e nao o FLOAT, pois tem melhor precisao.
//   > FLOAT - pequenos numeros decimais
//   > DOUBLE - grandes numeros decimais
//   > DECIMAL - grandes numeros decimais com ponto fixo
//   > BOOLEAN - não é recomendado usar boolean em uma SQL por razoes de desempenho. Se precisar
//     usar true ou fals, use INT ou TINYINT 0 (false), 1 (true).

// (Quanto mais precisao colocarmos nesse tipode dados, mais rapido e com melhor desempenho uma
// SQL funcionara).


// * Dados de Texto:
//   > CHAR (num) - o numero entre () indicara o numero exato de caracteres que o texto terá.
//   > VARCHAR (num) - o numero entre () indicara o numero maximo de caracteres.
//   > TEXT - determina dado do tipo texto sem limites de caracteres. Não é totalmente bom para o 
//            desempenho. Normalmente usado para um post de blog, por exemplo.


// * Dados do tipo Data:
//   > DATE - declara apenas datas - AAAA-MM-DD
//   > TIME - declara apenas horarios - HH:MM:SS
//   > DATETIME - declara data e horario - ex: 16/11/2020 AS 08:00 >> 2020-11-16 08:00:00

// Date: Sempre escreve-los entre "" e "YYYY-MM-DD" (ano, mes e dia).



// As colunas também podem ter restriçoes (Constraints) associadas. São restriçoes a nivel de 
//  tabela. Eles sao especificados cia DDL. O servidor analisa-os na hora de alterar os registros.

// * Restriçoes:
//   > NOTNULL - não aceita dados nulos (não estarao vazias) - os dados se tornam obrigatorios.
//   > UNIQUE - os dados nao se repetitao entre as linhas, mesmo nao sendo PK.
//   > DEFAULT - aumentará a si mesma a cada uma das linhas, desde que nao seja especificado um
//               outro valor que o sobrescreva.
//   > AUTO_INCREMENT - aumentará a si mesma a cada uma das linhas. Geralmente usado para o ID.


