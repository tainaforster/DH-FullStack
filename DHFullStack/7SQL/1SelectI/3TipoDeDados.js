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
//                  EX: CHAR(100) → 100 caracteres (ocupa 100 caracteres sempre)

//   > VARCHAR (num) - o numero entre () indicara o numero maximo de caracteres. Ele ocupa apenas
//                     o espaço do numeros de caracteres escritos.
//                     VARCHAR(100) → 100 caracteres (pode ocupar até X caracteres)

//   > TEXT - determina dado do tipo texto sem limites de caracteres. Não é totalmente bom para o 
//            desempenho. Normalmente usado para um post de blog, por exemplo.

//   > ENUM - mal, regular, bom, muito bom, excelente// feminino, masculino, outros...



// * Dados do tipo Data:
//   > DATE - declara apenas datas - AAAA-MM-DD
//   > TIME - declara apenas horarios - HH:MM:SS
//   > DATETIME - declara data e horario - ex: 16/11/2020 AS 08:00 >> 2020-11-16 08:00:00

// Date: Sempre escreve-los entre "" e "YYYY-MM-DD" (ano, mes e dia).



// As colunas também podem ter restriçoes (Constraints) associadas. São restriçoes a nivel de 
//  tabela. Eles sao especificados com DDL. O servidor analisa-os na hora de alterar os registros.



// *** Restriçoes (Constraints): São restrições que criamos e que são analisadas pelo servidor no 
//                               momento de modificar registros


//   > PRIMARY KEY (PK) - Uma Primary Key (PK) é um identificador único. Dois registros não podem ter
//                        a mesma chave primária. Não é obrigatório, mas é altamente recomendável que
//                        cada tabela tenha uma PK, normalmente é o campo ID.

//   > FOREIGN KEY (FK) - É utilizado para criar referência entre tabelas. Faz referência ao campo 
//                        “id” da tabela primária.

//   > NULL / NOTNULL - não aceita dados nulos (não estarao vazias) - os dados se tornam obrigatorios.
//                      Significa que o valor desse campo não existe ou não é conhecido. NULL NÃO é 
//                      vazio ou zero. Qualquer campo pode ser declarado NULL / NOT NULL. Quando 
//                      armamos a estrutura da tabela, definimos se o campo pode aceitar valores nulos.


//   > UNIQUE - Uma unique key é uma restrição que só permite valores únicos para um campo,mesmo nao 
//              sendo PK. Exemplos: RG, CPF, CNPJ, E-mail .

//   > DEFAULT - Caso ao inserir um registro não seja passado um valor para preencher determinado 
//               campo, este campo pode assumir um valor DEFAULT. Exemplos: NULL, Valor Padrão 
//               (Numérico, String, Boolean).

//   > AUTO_INCREMENT - aumentará a si mesma a cada uma das linhas. Geralmente usado para o ID.


// DDL é o conjunto de comandos SQL responsáveis pela definição dos dados, ou seja, pela criação de 
// bancos, esquemas, tabelas, campos, tipos de dados, constraints, etc.

// > ADD - adicionar campo
// > MODIFY - modificar o tamanho do campo
// > CHANGE - alterar o nome do campo e tipo primitivo
// > RENAME - renomear campo
// > DROP - deletar campo
// > DROP DATABASE - exclui o banco e dados
// > DROP TABLE - exclui a tabela
