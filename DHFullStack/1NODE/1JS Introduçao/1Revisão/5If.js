// CONDICIONAIS



// **** IF

// Permite executar um bloco de codigos sempre que se cumpra uma determinada condiçao.

// Estrutura:

// if (condiçao que desejamos avaliar) {
// codigo a ser executado caso a condiçao se cumpra
// };



// **** ELSE

// É escrito logo apos o fechamento de {} do if. Nao tem (condiçao) pois se o if nao se cumprir
// automaticamente executará o else.
// Permite executar um bloco de codigo quando a condiçao do IF nao se cumpre.
// O ELSE é sempre a ultima validaçao e só podemos utiliza-lo uma vez.



// **** ELSE IF

// Permite que se crie situaçoes para casos mais especificos, no qual o IF inicial nao pode cumprir,
// porem sem executar diretamente os codigos do ELSE.
// Precisa da (condiçao). Podemos colocar quantos else if quisermos.
// Necessita de uma ou mais condiçao para que ele possa acontecer.


let dia = 'segunda';

if (dia == 'domingo'){
    console.log ('Vou para a praia!');
}else if (dia == 'sexta'){
    console.log ('Vou para o cinema!');
}else if (dia == 'segunda'){
    console.log ('Vou tomar café!');
}else {
    console.log ('Fico em casa!');
};

// -----------------------------------------------------------------------------------------------

var idade = 15;
var acesso = '';

if (idade < 16){
    acesso = 'proibido';
}else if (idade >= 16 && idade <= 18){
    acesso = 'permitido somente acompanhado de um maior';
}else {
    acesso = 'permitido';
};

console.log(acesso)
