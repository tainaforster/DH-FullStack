// uma string (cadeia de texto) nada mais é do que um array de caracteres. Aquelas sequências de 
// texto que parecem simples, mas com alto potencial

// Para o JavaScript uma string é um objeto.

// Em uma String, podemos consultar propriedades e executar diversos métodos.
// Um método é uma função de um objeto



// Propriedades:

// *** .length - Retorna o tamanho (quantidade de caracteres incluindo espaços) de uma cadeia de texto 
let frase = 'Tudo vai dar certo' // Retorna 18
console.log (frase.length)



// *** .indexOf () - Ele pode ser executado a partir de uma string e ele recebe um parâmetro de texto
// que será pesquisado dentro dessa outra string
// Retorna a quantidade de caracteres até onde começa a palavra definida no parâmetro.
// A primeira letra de uma string sempre estará no índice 0.

let osho = 'A vida começa onde seu medo acaba'
console.log (osho.indexOf('vida')) // Retorna 2
console.log (osho.indexOf('confiança')) // Sempre que procurar algo que não esteja na string
// o .indexOf te retornará -1



// *** .slice () - (em português significa fatia, porção ou sessão)
// Além da string onde executará o método, é preciso colocar 2 parâmetros numéricos.
// o primeiro representa onde começa o nosso índice 
// o segundo onde o índice deve terminar e é *opcional*

let cdf = 'Preciso focar mais'
console.log (cdf.slice(8,13)) // Retorna focar

let extrair = cdf.slice(0,7) // extraiu a palavra 'Preciso' da variável cdf, logo a variável extrair = Preciso
console.log (extrair)



// *** .trim () - a única função é remover os espaços em branco antes e depois da primeira
// ocorrência alfanumérico. Não recebe parâmetros.
// Remove os espaços antes e depois da frase.
// Não remove espaços entre as palavras.


let pessoa = '   Sou um ser humano   '
console.log (pessoa)
console.log (pessoa.trim()) // Remove os espaços antes e depois da frase



// *** .split () - Converte uma string para uma array
// Pricisa passar como parâmetro o delimitador através de qual pretende cortar
// e criar uma nova posição na array.

let humano = 'Sou do planeta Terra'
console.log (humano.split(' ')) // parâmetro string com espaço em branco,
// retorna a frase toda, palavra por  palavra, em array

console.log (humano.split('Terra')) // retira o parâmetro do array

console.log (humano.split()) // Sem parêmeretro retorna a frase toda como um array



// *** .replace () - Permite substituir uma parte do texto dentro de uma string
// é necessário passar 2 parâmetros - o primeiro indica a porção do texto que está 
// procurando, o segundo o texto irá substituí-lo.

let digitalHouse = 'Sou programadora php'
console.log (digitalHouse.replace('php', 'JavaScript'))

