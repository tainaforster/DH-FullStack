const organizacao = 'Petshop Node';

let pets = [
    {
        nome: 'Monna',
        tipo: 'cachorro',
        raca: 'SRD',
        idade: 4,
        genero: 'Femenino',
        vacinado: true
    },
    {
        nome: 'Amon',
        tipo: 'gato',
        raca: 'SRD',
        idade: 6,
        genero: 'Masculino',
        vacinado: false
    }
];


function listarPets (){
for (let i = 0; i < pets.length; i++) {
    console.log ('Nome: ' + pets[i].nome)
    console.log ('Tipo: ' + pets[i].tipo)
    }
};
// listarPets ();

function validaDados (novoPet){
    return (novoPet.nome &&
        novoPet.tipo &&
        novoPet.raca &&
        novoPet.idade &&
        novoPet.genero &&
        novoPet.vacinado
        )
};

function cadastrarPets (objetoPet) {
    if (typeof objetoPet == 'object'){
        if (validaDados (objetoPet)){
            pets.push(objetoPet)
            console.log (pets)
    }else {
        console.log ('O objeto não tem todas as propriedades necessárias informadas!')
    }
    }else {
        console.log ('Insira um objeto válido');
    }
};

let ObjPet = {
    nome: 'Novo Pet',
    tipo: 'Desconhecido',
    raca: 'Desconhecido',
    idade: 6,
    genero: 'Desconhecido',
    vacinado: ''
};
cadastrarPets (ObjPet)