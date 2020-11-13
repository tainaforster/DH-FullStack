// OPERADORES

// é a parte de codigo que permitira fazer operaçoes aritimeticas, comparaçoes, concatenaçoes...


// *** Atribuiçao '=' atribui um valor a uma determinada variavel.

let paisDeNascimento = 'Brasil';

console.log ('= ' + paisDeNascimento)



// ------------------------------------------------------------------------------------------------

// *** Operadores Aritimeticos - nos pemite fazer operaçoes matematicas tradicionais.

// ** Adição +
let soma = 5 + 3;
console.log ('+ ' + soma);

// ** Subtraçao - 
let subtracao = 6 - 3;
console.log ('- ' + subtracao);

// ** Multiplicaçao *
let multiplicacao = 8 * 2;
console.log ('* ' + multiplicacao);

// ** Divisao /
let divisao = 10 / 2;
console.log ('/ ' + divisao);



// ** Modulo % - Retorna o resto de uma divisão.
let modulo = 7 % 2; // Retorna 1
console.log ('% ' + modulo);



// ** Incremento ++ adiciona uma unidade
let incremento = 5;
console.log ('++ ' + ++ incremento); // +1 Retorna 6
console.log ('++ ' + ++ incremento); // +1 Retorna 7
console.log ('++ ' + ++ incremento); // +1 Retorna 8



// ** Decremento -- subtrai uma unidade
let decremento = 10;
console.log ('-- ' + -- decremento); // -1 Retorna 9
console.log ('-- ' + -- decremento); // -1 Retorna 8
console.log ('-- ' + -- decremento); // -1 Retorna 7

// ------------------------------------------------------------------------------------------------



// *** Comparaçao Simples == - Nos permite perguntar se um valor é igual ao outro.
//                             O resultado sempre vai ser boolean True ou False.
let comparacaoSimples = (5==8); // retorna False
console.log ('== ' + comparacaoSimples);

console.log (5==5); // retorna True



// *** Comparaçao Rigorosa === - Nos permite perguntar se um valor e o tipo de dado é igual ao outro.
//                               O resultado sempre vai ser boolean True ou False.
let comparacaoRigorosa = (5 === '5'); // Retorna False. Valores iguais porém é um Number e uma String.
console.log ('=== ' + comparacaoRigorosa);

console.log ('Tainá' === 'Tainá'); // Retorna True. Valores e dados 'String' iguais.



// *** Desigualdade Simples != - Nos permite perguntar se um valor é diferente do outro.
//                               O resultado sempre vai ser boolean True ou False.
let desigualdadeSimples = (5!=8); // retorna True
console.log ('! ' + desigualdadeSimples);

console.log (5!=5); // retorna False



// *** Desigualdade Rigorosa !== - Nos permite perguntar se um valor e o tipo de dado é diferente
//                                 do outro.
//                                 O resultado sempre vai ser boolean True ou False.
let desigualdadeRigorosa = (5 !== '5'); // Retorna True. Valores iguais porém é um Number e uma String.
console.log ('!== ' + desigualdadeRigorosa);

console.log ('Tainá' !== 'Tainá'); // Retorna False. Valores e dados 'String' iguais.

// ------------------------------------------------------------------------------------------------


// *** Maior que > - Nos permite perguntar se um numero e maior que o outro.
//                   O resultado sempre vai ser boolean True ou False.
let maiorQue = 5 > 3; // Retorna True
console.log ('> ' + maiorQue);


// *** Maior ou igual que >= - Nos permite perguntar se um numero e maior ou igual que o outro.
//                            O resultado sempre vai ser boolean True ou False.
let maiorIgual = 15 >= 26; // Retorna False
console.log ('>= ' + maiorIgual);



// *** Menor que < - Nos permite perguntar se um numero e menor que o outro.
//                   O resultado sempre vai ser boolean True ou False.
let menorQue = 10 < 3; // Retorna False
console.log ('< ' + menorQue);


// *** Menor ou igual que <= - Nos permite perguntar se um numero e menor ou igual que o outro.
//                             O resultado sempre vai ser boolean True ou False.
let menorIgual = 10 <= 20; // Retorna True
console.log ('<= ' + menorIgual);

// ------------------------------------------------------------------------------------------------


// *** OPERADORES LOGICOS

// Retorna valor Boolean.


// ** && and - nos permite juntar frases de códigos que queremos comparar.
//             >> Só retorna TRUE se as duas sentenças forem verdadeiras

let dia = 'domingo';
let clima = 'ensolarado';

let and = dia == 'domingo' && clima == 'ensolarado';
let and2 = dia == 'sabado' && clima == 'ensolarado';

console.log ('&& - ' + and); // Retorna TRUE
console.log ('&& - ' + and2); // Retorna FALSE



// ** ||  or - utilizado para questionar varias sentenças ao mesmo tempo
//             >> qualquer uma das frases que forem verdadeira, toda a sentença dará TRUE.

let or = 8 >= 15 || 8 != 3;

let or2 = 8 >= 15 || 8 == 3;

console.log ('|| ' + or); // Retorna TRUE - uma das sentanças é verdadeira
console.log ('|| ' + or2); // Retorna FALSE - as duas sentenças são falsas


// ** !  negaçao - nos permite alterar o valor para falso ou verdadeiro

let negacao = 89==09; // Retornaria FALSE

console.log (('! ') + !negacao); // Retirna TRUE pois estamos negando o valor real da sentença acima



// ** +  concatenaçao -  usado para unir duas ou mais cadeias de texto (strings)
//                       >> Se quisermos um espaço entre os nomes devemos concatenar uma string
//                       que contenha um espaço em branco entre essas duas variaveis.

let nome = 'Tainá';
let sobrenome  = 'Forster';
let nomeCompleto = nome + ' ' + sobrenome;
let idade = 31

console.log (nomeCompleto);
console.log (nomeCompleto + ' ' + idade); // Mesmo a variavel sendo Number na concatenaçao o numero
//                                          // acaba sendo convertido para String.
                                         

