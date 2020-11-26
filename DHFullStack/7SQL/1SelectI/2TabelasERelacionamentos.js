// Como modelar (entender a estrutura com a qual essas informaçoes serao armazenadas) um banco de dados:

// Um dos metodos mais comuns é o DIAGRAMA RELACIONAL, esse diagrama é uma abstraçao do que é 
// conhecido como tabela fisica, que é a tabela real do banco de dados.

//  Esses diagramas permitem entender de forma rapida e simples todas as tabelas de nosso banco
//  de dados.


// Estrutura:

// *** Entidades - Dentro mdo sistema teremos entidades, que serao a representação de um objeto ou coisa
//  da vida real. Para integra-los em nosso diagrama usa-se RETANGULOS.
// Para o nome destas tabelas usa-se substantivos no plural.


// *** Atributos - Estas sao as caracteristicas que irao definir cada entidade. Por exemplo: em uma
//  entidade FILMES poderiam ter os seguintes atributos: titulo, avaliaçao, data-de-lançamento,
//  pais-de-origem... Para integra-los em nosso diagrama usa-se CIRCULOS.


// *** Registro - linhas


// *** Cardinalidade - onde relariona as informaçoes de uma tabela com a outra
//         Um para um - 1:1   Pessoa ------ Dados pessoais
//         Um para muitos - 1:N   Pessoa ------ Cartao
//         Muitos para muitos - N:N   Cliente ------ Produto


//  Conexão lógica entre entidades é representada por um losango. Podem ter atributos próprios. 
//  EX:
//               retangulo           losangulo        retangulo
//              PROFESSORES-----------LECIONA-----------TURMAS



// *** Chave primaria (PK - Primary key) - É um campo (ou combinaçao de campos) que identifica de 
// forma exclusiva cada linha em uma tabela. Idto significa que nao pode haver duas linha em uma 
// tabela com o mesmo PK. 
//  Para identificar a chave primaria em uma entidade, podemos escrever um atributo em NEGRITO
// seguido da iniciais (PK), em negrito tambem.


//  Relaçoes no diagrama - elas indicam como se relacinar com duas tabelas.


//  Em banco de dados temos 3 tipos de relaçoes:

// - Um para um;
// - Um para muitos;
// - Muitos para muitos.


// Sempre que fazemos uma relaçao entre as tabelas devemos usar as chaves primarias.

// Chave estrangeira ou chave externa (FK) - se refere ao tipo de relacionamento entre distintas 
// tabelas de dados do banco de dados. Uma chave estrangeira é chamada quando há o relacionamento 
// entre duas tabelas.