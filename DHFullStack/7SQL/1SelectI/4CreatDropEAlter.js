//  Create, Drop e Alter

// "A casa é o SCHEMA, os quartos são as TABELAS, e os móveis os DADOS"

// Crie a Schema - escolha utf8 e apos Apply


// *** Create table (new_tlb) - nos permite criar uma nova tabela. É necessario especificar o NOME da
//                          tabela, suas COLUNAS com seus TIPOS e CONSTRAINTS.

// CREAT TABLE nome_da_tabela (
//   nome_da_coluna_1 TIPO_DE_DADO CONTRAINTS,
//   nome_da_coluna_2 TIPO_DE_DADO CONTRAINTS,
// );

// CREAT TABLE movies (
//    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
//    title VARCHAR(500) NOT NULL,
//    rating DECIMAL(3,1) UNSIGNED NOT NULL,
//    awards INT UNSIGNED DEFAULT 0,
//    release_date DATE NOT NULL,
//    length INT UNSIGNED NOT NULL
// );

// Quando criamos uma coluna que contem um id externo, sera necessario usar a funçao FOREIGN KEY 
//  para esclarecer a que tabela e que coluna esses dados se referem


// É importante observar que a tabela CLIENTES deve existir antes de executar esta funçao, para
// criar a tabela ordem

// CREAT TABLE ordens (
//    ordem_id INT NOT NULL,
//    ordem_numero INT NOT NULL,
//    cliente_id INT,
//    PRIMARY KEY (ordem_id),
//    FOREIGN KEY (cliente_id) REFERENCES (cliente_id),
// );




// *** Drop table (tlb_name) - Ira aruar apenas na tabela que queremos excluir.

// DROP TABLE IF EXIST movies;



// *** Alter table (tlb_name) - Permite alterar uma tabela ja existente e ira operar com 3 comandos:

//   > ADD - para adicionar uma coluna;
//   > MODIFY - para modificar uma coluna;
//   > DROP - para excluir uma coluna.

//  ALTER TABLE nome_da_tabela
//  ADD coluna3 TIPO_DE_DADO [FIRST|AFTER coluna 2]
//  MODIFY NOVO_TIPO_DE_DADO
//  DROP coluna4;