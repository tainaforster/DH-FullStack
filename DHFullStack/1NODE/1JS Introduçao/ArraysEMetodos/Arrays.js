// São colecaoes de dados assim como os objetos com posicoes
// a contagem do indice sempre comecando do ZERO
// Dentro de [ ]
// é um tipo especial de OBJETO,
// não é considerado um tipo de dado

var comidasFavoritas = ['Feijoada', 'Pizza','Filé a parmegiana'];
let numerosSorteados =     [ 12, 45, 56, 324, 452];
console.log (comidasFavoritas)
console.log (numerosSorteados)


// Para acessar um elemento usamos o
//nome da Array e o numero da posicao
//que queremos acessar dentro do []

let numerosSorteados1 = [ 12, 45, 56, 324, 452]
console.log (numerosSorteados1[0])//12
console.log (numerosSorteados1[3])//324


// Adicionar um item na lista array .push
var cores = ['azul', 'rosa', 'verde']
cores.push ("amarelo")
console.log (cores)