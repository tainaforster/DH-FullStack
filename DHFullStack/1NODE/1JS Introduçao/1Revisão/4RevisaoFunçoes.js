// REVISAO DE FUNÇOES

// É uma sequencia de açoes que serao executadas quando necessario.
// É um bloco de codigo que podemos usar todas vezes que for necessario. Esse bloco pode realizar
// uma tarefa especifica e retornar um valor. Assim podemos agrupar o codigo que vamos usar mais
// de uma vez.


// Estrutura:

// function somar (a,b) {
//    return a + b;
// };

// * function - palavra reservada - indica que sera criada uma funçao;

// * somar - nome da funçao - definimos um nome para podermos chamar a funçao no momento que
//                            que formos usa-la;

// * (a,b) - parametros - Dentro de parenteses escrevemos os parametros da funçao. Se receber mais
//                        de um, os separamos por virgulas. Mesmo se a funçao nao reveber parametros,
//                        escrevemos os parenteses sem nada dentro (). Dentro da nossa funçao podemos
//                        acessar os parametros como se fossem variaveis.

// * { } - corpo - Entre as chaves de abertura e fechamento escrevemos a logica da nossa funçao (o 
//                 codigo que queremos que seja executado cada vez que a chamarmos).

// * return - É muito comum escrevermos uma funçao da qual queremos devolver externamente o resultado
//            so processo que esta sendo feito dentro dela. Para isso utilizamos a palavra reservada
//            RETURN seguida do que queremos retornar. 


// Executando uma funçao: a maneira de executar uma funçao é digitando seu nome, seguido pela abertura
//                        e fechamento dos parenteses (). Ex: nomeFunction();
//                        Se quisermos ver ou salvar os dados que retornam, sera necessario armazena-los
//                        em uma variavel, ou fazer um console.log da execuçao.

// let resultado = nomeFunction (); ou
// console.log (nomeFunction());


// Os parametros sao as variaveis que escrevemos quando definimos a funçao
// Os argumentos sao os valores que enviamos quando executamos a funçao


// Se a funçao espera por argumentos, podemos passa-los dentro de (). É importante respeitar a ordem,
// se houver mais de um parametro, pois o javascript ira atribui-losna ordem em que chegam.

function saudacao (nome, sobrenome){
    return 'Olá ' + nome + ' ' + sobrenome;
};
console.log (saudacao('Maria', 'de Lourdes')); // Retorna 'Olá Maria de Lourdes'


// Tambem é importante sabermos que quando temos parametros em nossa funçao, o javascript espera que
// passemos como argumentos ao executa-la.

function saudacao1 (nome, sobrenome){
    return 'Olá ' + nome + ' ' + sobrenome;
};
console.log (saudacao()); // Sem os argumentos. Retorna 'Olá undefined undefined'


// O javascript tambem nos permite criar os valores pre definidos. Se adicionarmos um = depois do 
// parametro, poderemos especificar seu valor no caso de nao chegar nenhum.

function saudacao2 (nome = 'visitante', sobrenome = 'anonimo') {
    return 'Olá ' + nome + ' ' + sobrenome;
}
console.log (saudacao2 ());




// As funçoes podem ser criadas de duas formas:



// 1° - Declaradas - é aquela que recebe um nome formal e não se atribui a uma variavel
//                   function somar = () {...}

function somar (a, b, c){
    return a + b + c;
};
console.log (somar (10,10,10)); //



// 2° - Expressão da Funçao - é aquela que se atribui como valor à uma variavel.
//                            let somar = funticion () {...}

const multiplicar = function (a, b) {
    return a * b;
};

let resultadoMultiplicacao = multiplicar (10,2); // Podemos guardar a funçao em uma variavel depois
console.log (resultadoMultiplicacao); 


// O objetivo de uma funçao é ter toda a logica necessaria pra cumprir um determinado objetivo.

function dobro (umNumero) {
    return umNumero * 2;
};
console.log (dobro (5)); // Retorna 10



// Quando trabalhamos com funçoes devemos ter em mente seu ESCOPO que é a regiao do codigo
// na qual a varialvel é conhecida, é basicamente o alcance que tem uma variavel.


// Temos dois tipos de ESCOPOS:


// 1° Escopo Local - Quando a variavel é declarada DENTRO de uma funçao. Nao existe fora dela.

function bemVindo (){
    let s = 'Olaaaar!'; // Essa variavel so existe dentro dessa funçao.
    return s;
};
console.log (bemVindo()); // Retorna 'Olaaaar!'



// 1° Escopo Global - Quando a variavel é declarada FORA de uma funçao. Existe em qualquer
//                    lugar do codigo

let aMelhorLinguagem = 'JavaScript';

function estouAprendendo (){
    return aMelhorLinguagem;
};
console.log (estouAprendendo());

