// TIPOS DE DADOS:



// *** Number - pode ser um numero inteiro ou um decimal

let idade = 31;
let preco = 15.35; // não utilizamos a virgula
console.log (idade);
console.log (preco);


// *** String - textos, qualquer palavra ou frase. Não há limites de caracteres e pode conter
//              numeros e letras. Seu valor de estar sempre dentro de aspas simples ou duplas.
//              Tudo o que for colocado entre aspas será interpretado como uma String.

var nome = 'Tainá' // aspas simples
console.log (nome);

var sobrenome = "Forster" // aspas duplas


// *** Booleanos - apenas dois valores: TRUE ou FALSE.

let nasceuNoBrasil = true;
let nasceuNaItalia = false;
console.log (nasceuNoBrasil);
console.log (nasceuNaItalia);


// *** NaN = Not a Number. 

let multiplicacao = 'a' * 2; // NaN
console.log (multiplicacao);



// *** Null - para atribuir um valor vazio ou desconhecido a uma variavel

var passageirosNoTrem = null; // não sabemos o numero exato de passageiros.
console.log (passageirosNoTrem);


// *** Undefined - uma variavel que nunca teve um valor atribuido a ela.

var expectadores; // o Javascript armazena a variavel na memoria porém sem um valor atribuido a ela
console.log (expectadores); // Undefined

expectadores = 10; // foi atribuido um valor aos expectadores.
console.log (expectadores);



// *** Objeto Literal - Usa-se {}. Armazena varios tipos de dados dentro de uma variável.
//                      Pode possuir

let objLiteral = {
    // objeto literal vazio
}

let pessoa = {
    nome: 'Tainá', // propriedades - *String*
    idade: 31, // propriedades - *Number inteiro*
    altura: 1.54, // propriedades - *Number decimal*
    Chata: false // propriedades - *Booleano*
};
console.log (pessoa);



// *** Arrays - listas ou matrizes. Usa-se []. Possuem indices numericos para identifica-los.
//              A contagem do indice SEMPRE COMEÇA DO ZERO!
//              Cada item da lista representa uma posiçao partindo do zero.
//              Valores separados por virgula.

let seriesFavoritas = ['Got', 'Breaking Bad', 'How a met your mother'];
//            posiçoes:  0          1                 2
console.log (seriesFavoritas);

// para imprimir uma posisão especifica do arraey:
console.log(seriesFavoritas[2]); // 'How a met your mother'