//Json - JavaScript Object Notation 

//é um formato de texto simples, usado para trocar dados de diferentes sistemas. 
// Pode ser interpretado por várarias linguagens de programação.

 // '[{"Nome":"Brasil","Capital":"Brasilia"}]' --> com essa estrutura é possivel converter 
 // facilmente um objeto literal ou um array.


 // JSON.parse() - Transforma string em objeto
 // os dados fornecidos devem ser um texto no formato JSON

 let dadosEmJson = '[{"Nome":"Brasil","Capital":"Brasilia"}]'
 let dadosConvertidos = JSON.parse (dadosEmJson)
 console.log (dadosConvertidos)

 

 // JSON.stringify - Transforma objeto em string
 // recebe um array ou um objeto literal como parâmetro e retorna uma
 // string do tipo JSON

 let dadosNumObjeto = {
     nome: 'Tainá',
     sobrenome: 'Barbosa',
     pais: 'London'
 }
 let dadosConvertidos1 = JSON.stringify(dadosNumObjeto); // Retorna String
 console.log (dadosConvertidos1)



 let pessoa = {
    nome: 'Caue',
    idade: 22,
    altura: 1.70
    }
   
   let json = JSON.stringify(pessoa) // Retorna String
   console.log (json)

   let objetoDeNovo = JSON.parse (json) // Volta a objeto
   console.log (objetoDeNovo)

   // Funciona também com arrays

   let listaDeCompras = ['pão', 'queijo', 'presunto']
   let compras = JSON.stringify(listaDeCompras) // Retorna uma string
   console.log (compras)

   let arrayDeNovo = JSON.parse (compras)// Retorna array 
   console.log (arrayDeNovo)
   console.log (arrayDeNovo[2])