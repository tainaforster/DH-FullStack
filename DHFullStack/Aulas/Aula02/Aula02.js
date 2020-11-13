let organizacao = 'Petshop Node';

var pets = [
  {
 nome:'Yoshi',
 tipo: 'cachorro',
 raca: 'Akita inu',
 idade: 6,
 genero: 'masculino',
 vacinado: true,
 servicos: []
  },
  {  
  nome:'Pituco',
  tipo: 'pássaro',
  raca: 'calopsita',
  idade: 3,
  genero: 'fêmea',
  vacinado: false,
  servicos: []
}

];

/* Desafio 01: Listar duas propriedades do array de objetos da variável pets,
ou seja, nome e tipo. */ 

function listarPets (){
  for (let i = 0; i < pets.length; i++) {
  console.log('Nome:'+ ' ' + pets[i].nome)
  console.log('Tipo:'+ ' ' + pets[i].tipo)
}
}

/* Desafio 02: criar uma função que irá cadastrar um novo pet dentro da lista
de pets, ou seja, teremos que adicionar na lista de pets esse novo pet */

function validaDados (novoPet){
  return (novoPet.nome && 
    novoPet.tipo && 
    novoPet.raca && 
    novoPet.idade && 
    novoPet.genero &&
    typeof novoPet.vacinado == 'boolean')
}

function cadastrarPet (objetoPet) {
  if (typeof objetoPet == "object"){
    if(validaDados(objetoPet)){
    pets.push(objetoPet)
    console.log (pets)
  } else {
    console.log ('O objeto não tem todas as propriedades necessárias informadas')
  } 
  }else {
    console.log ('Insira um objeto válido')
  }
} 

let objPet = {
  nome:'Novo Pet',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: true
};

cadastrarPet(objPet)
//listarPets()


/* Desafio 03 - função para verificar animais vacinados ou aqueles que precisam de vacina, 
lembrando que está função irá receber um parâmetro. (podendo ser um único pet da lista, 
ou, caso queira fazer o Extra terá que trabalhar a lista por completo).
(Extra - se quiserem efetuar uma listagem de animais vacinados e não vacinados)
Dica: vocês podem criar uma propriedade vacinado e atribuir valores booleanos (true ou false) */

function vacinados (pets){
  let petsVacinados = [];
  let petsNaoVacinados = [];
  
  let numPetsVacinados = 0;
  let numPetsNaoVacinados = 0;

  for (let i = 0; i < pets.length; i++){
    if (pets[i].vacinado){
      petsVacinados.push (pets[i].nome);
      numPetsVacinados ++;
    } else{
      petsNaoVacinados.push (pets[i].nome);
      numPetsNaoVacinados ++;
    }
  }
  console.log ('Pets vacinados:  ('+petsVacinados+')');
  console.log ('Essa é a lista de animais vacinados: ('+numPetsVacinados+')')
 
  console.log ('Pets não vacinados: ('+petsNaoVacinados+')')
  console.log ('Essa é a lista de animais não vacinados:  ('+numPetsNaoVacinados+')');
  
}
vacinados (pets);


/*  Desafio 04 - criar uma função callback chamada seriços que tenha dois serviços:
dar banho no pet e tosar o pet. Sendo assim, teremos sempre que passar um pet da nossa listar
de pets e também um serviço que aquele pet irá utilizar. */


function servicosPrestados (pet, servico){
  servico (pet)
};

function BanhoPet (pet){
  pet.servicos.push ('Banho')
  console.log ('O pet ' + pet.nome + ' tomou banho')
};

function tosarPet (pet){
  pet.servicos.push ('Tosa') 
  console.log ('O pet ' + pet.nome + ' foi tosado') 
};

servicosPrestados (pets[0], BanhoPet)
servicosPrestados (pets[0], tosarPet)


/* function servicos (nome, listapets, operacao) {
  operacao (nome, listapets) 
  console.log ("Você está interessado por um outro serviço?")
}

function banho (nom, pets) {
  for (let i = 0; i <pets .length; i ++) {
    if (pets [i] .nome == nom) 
    console.log ("o pet " + nom + " esta tomando banho")
  }
} 

function tosado (nom, pets) {
  for (let i = 0 ; i <pets.length; i ++) {
    if (pets [i] .nome == nom) 
    console.log ("o pet " + nom + " esta sendo tosado")
  }
} 
servicos ("Yoshi", pets, banho) ; */
