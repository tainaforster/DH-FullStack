// As variáveis nos permite armazenar dados que podemos alterar agora ou no futuro.

// para criar uma variavel usamos uma palavra reservada:

// Sempre utilize bons padroes para cria-las. 
// O mais utilizado é o *Camel Case* onde se utiliza uma letra maiuscula a partir da segunda palavra: telefoneAmigo
// *Snake Case* - se utiliza _ para juntar as palavras: telefone_Amigo
// *Kebab Case* - se utiliza - para juntar as palavras: telefone-amigo

// Não ulilize espaços ou acentos para o nome das variaveis.


// Atribuiçao de um valor '='


// *** var - 
var telefoneAmigo = 947819350 // o numero do telefone no caso repesenta o valor da variavel (o dado que queremos armazenar)

var nomeDeUsuario = 'Tchuba mão de Ferro';
console.log (nomeDeUsuario) // console.log imprime na tela o código a ser executado



// *** let - pertencem exclusicamente a um bloco de execuçao
// bloco de execuçao é todo o codigo dentro das {}

let nomeDoCliente = 'Monna';
// let nomeDoCliente = 'João' // ERRO: Identifier 'nomeDoCliente' has already been declared.
// Variavel nomeDoCliente já declarada.

// Para mudar o valor da variavel basta chamar ela e mudar o valor.

nomeDoCliente = 'Jonas'; // mudou o valor da variavel para 'Jonas'
console.log (nomeDoCliente)


if (true){
    let nomeDoCliente = 'Renato';
    console.log (nomeDoCliente);
} // como todo bloco de codigo começa com {}, então tudo dentro desse bloco é novo, não são iguais.
// o let pode ter o mesmo nome fora e dentro do bloco de códigos.


// *** const - Contante. Uma vez atribuido um valor a ele, não será possivel altera-lo

const carro = 'Civic';
carro = 'Astra'; // ERRO: Assignment to constant variable. Não pode mudar o valor de uma Constante.
console.log (carro);
