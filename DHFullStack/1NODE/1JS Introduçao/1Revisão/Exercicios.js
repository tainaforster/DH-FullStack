//  01 - Declarando Variáveis

//  Uma variável é um espaço de memória para armazenar valores. Podemos criá-los e, por sua 
//  vez, também podemos atribuir-lhes um certo valor.

//  Em JavaScript, podemos declará-los usando a palavra var  e depois o nome que queremos dar.
//  Sua tarefa será declarar duas variáveis: uma com o nome idade  e o outro com o nome peso.

var idade = "27";
var peso = 85;

console.log ('Ex 01 - ' + idade);
console.log ('Ex 01 - ' + peso);

// -----------------------------------------------------------------------------------------------

//  02 - Uma variável de cada tipo

//  Para este exercício, solicitamos que você declare 4 variáveis ​​usando o let com os nomes:
//  verdadeiro, nada, texto e número. Para cada um deles, você deve atribuir o tipo de dados 
//  que sugere seu nome, conforme apropriado.

let verdadeiro = true;
let nada = null;
let texto = "Aqui é uma string";
let numero = 123;

console.log ('Ex 02 - ' + verdadeiro);
console.log ('Ex 02 - ' + nada);
console.log ('Ex 02 - ' + texto);
console.log ('Ex 02 - ' + numero);

// -----------------------------------------------------------------------------------------------

//  03 -  A função Number

//  Já vimos como declarar uma variável e atribuir-lhe o tipo de dados que queremos como um
//  valor. Agora, vamos criar 3 variáveis numéricas mas desta vez usando a função nativa 
//  Number(). Eles devem ser chamados positivos, negativos e decimais, e cada uma delas deve
//  armazenar um número que corresponda ao seu nome. Já vimos como declarar uma variável e
//  atribuir-lhe o tipo de dado que queremos como um valor. 

let positivo = Number (8);
let negativo = Number (-2);
let decimal = Number (5.3);

console.log ('Ex 03 - ' + positivo);
console.log ('Ex 03 - ' + negativo);
console.log ('Ex 03 - ' + decimal);

// -----------------------------------------------------------------------------------------------

// 04 - Usando a função parseInt

//  Uma boa maneira de aprender como usar uma função nativa como esta é passar em diferentes
//  tipos de dados e ver o que acontece em cada caso. Vamos fazer uso dessa prática.
//  Para este exercício te damos duas variáveis declaradas. E pedimos que você faça o seguinte:

//  --> A variável nan você atribui a ele o que é devolvido pelo parseInt() quando passamos
//  um dado não-numérica

//  --> A variável correto você atribui a ele o que é devolvido pelo parseInt() quando passamos
//  um dado numérico

const nan = parseInt ("hello")
const correto = parseInt (8)

console.log ('Ex 04 - ' + nan);
console.log ('Ex 04 - ' + correto);

// -----------------------------------------------------------------------------------------------

// 05 - Funções: Declarar funções

// Sua tarefa agora, é criar uma função que vai se chamar exemplo e tem que retornar uma String
// dizendo "Olá, sou uma função".

function exemplo (){
    return "Olá, sou uma função";
}
console.log('Ex 05 ' + exemplo());

// -----------------------------------------------------------------------------------------------

// 06 - Declarando funções e variáveis

// Vamos criar uma função e atribuí-la a uma variável!
// Crie uma variável com o nome de exemplo1. Ele deve retornar uma String que diz: "Oi, eu sou uma
// função expressa".

let exemplo1 = function (){ 
    return "Oi, eu sou uma função expressa";
};
console.log('Ex 06 ' + exemplo1());

// -----------------------------------------------------------------------------------------------

// 07 - Funções com parâmetros

// No exemplo, apresentamos a você uma função que já foi criada. Mas acontece que quando a 
// invocamos, não funciona. Isso ocorre porque a função precisa de certos parâmetros e não os possui.
// Seu dever é modificar o código que já está escrito para adicionar os parâmetros necessários à
// função.

function saudar (nome, sobrenome) {
    return 'olá, ' + nome + ' ' + sobrenome + '!';
};
console.log('Ex 07 ' + saudar('Monna', 'Forster'));

// -----------------------------------------------------------------------------------------------

// 08 - Numeros Pares

// Vamos fazer uma função que nos permita reconhecer números pares.
// Crie a função ePar. Ele deve receber um número como  parâmetro e retorna um boolean (true/false)
// indicando se esse número é divisível por dois.

function ePar (numero){
    return numero % 2 == 0;
}
console.log('Ex 08 ' + ePar(7));

// -----------------------------------------------------------------------------------------------

// 09 - Declarando três funções

// Você se lembra quando declaramos variáveis ​​para poder usá-las mais tarde? Bem, aqui podemos 
// fazer algo semelhante. Mas, em vez de declarar variáveis ​​(estruturas que contêm informações), 
// podemos declarar funções (estruturas que processam informações).

// Escreva as três funções a seguir:

// anterior: recebe um número como parâmetro e retorna esse número menos um.

// triplo: recebe um número como parâmetro e devolve o triplo desse número.

// anteriorDoTriplo: receba um número como parâmetro e, usando as duas funções anteriores, você 
// terá que retornar o número. recebido multiplicado por 3 (três) e o resultado subtrai 1 (um).

function anterior (numeroA){
    return --numeroA;
};
console.log ('Ex 09.1 ' + anterior(10));


function triplo (numeroB){ 
    return numeroB * 3;
};
console.log ('Ex 09.2 ' + triplo(10));


function anteriorDoTriplo (numeroC){
    return numeroC * triplo - anterior;
};


function anteriorDoTriplo(numero){
    let multiplica = triplo(numero);
    return anterior(multiplica);
};
console.log ('Ex 09.3 ' + anteriorDoTriplo(2));

// -----------------------------------------------------------------------------------------------

// 10 - Meu primeiro if

// Declare uma variável com o nome dado e atribua um valor booleano.
// Então você deve fazer um  if para avaliar essa variável que se for true imprimir "É verdadeiro!",
// caso contrário "É falso!".

let dado = true
    if (dado == true){
        console.log('Ex 10 ' + "É verdadeiro!");
    }else
    console.log('Ex 10 ' + "É falso!");

// -----------------------------------------------------------------------------------------------

// 11 - Igualdade, If e Else

// Neste exercício te damos uma variável chamada linguagem, que tem uma String atribuída. Seu 
// trabalho agora é construir uma condicional if / else para que, se a variável contém "javascript" 
// imprima no console o texto "Estou aprendendo", se não imprima"Vou aprender mais pra frente".

let linguagem = "javascript";

if (linguagem === "javascript"){
    console.log('Ex 11 ' + "Estou aprendendo");
}else{
console.log('Ex 11 ' + "Vou aprender mais pra frente");
};

// -----------------------------------------------------------------------------------------------

// 12 - Posso passar?

// Complete a função podePassar para que, analisando o nome que recebe por parâmetro, determine 
// se a pessoa pode passar ou não. Se o nome da pessoa for "Natalia" não a deixará passar e a 
// indicará retornando false, se o nome da pessoa for diferente a deixará passar e a indicará 
// retornando true.


function podePassar (nome){
    return !(nome === 'Natalia');
    };

console.log('Ex 11 ' + podePassar('Bruno'))

// -----------------------------------------------------------------------------------------------

