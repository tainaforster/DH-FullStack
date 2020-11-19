//  Talble Reference


//  É possivel e necessario fazer consultas a fiferentes tabelas e juntar os resultados.

//  Ao fazer consultas que envolvem relaçoes entre as tabelas, é muito importante ter em  mente
// qual é a estrurura do banco de dados.


// Se quisesse mostrar TODAS as vendas de um cliente especifico, precisaria usar dados de AMBAS AS
// TABELAS e LIGA-LAS a algum CAMPO que eles COMPARTILHAM. Neste caso caso o CLIENTE_ID

//              CLIENTES               VENDAS
//             *id (PK)*               id (PK)
//               nome                   data
//             sobrenome                local
//                                   *cliente_id*

//  SELECT clientes_id AS id, clientes.nome, vendas.data
//         (Selecionamos a coluna id da tabela de clientes e atribuir o 'nome' id,  a columa nome da
//         tabela clientes, a coluna data da tabela vendas)
//  FROM clientes, vendas
//       (A select que fazemos na tabela cliente e vendas. Essa consulta traria TODOS os clientes e
//       vendas. Precisamos trazer um FILTRO que mostre APENAS as vendas de cada usuario em partivular
//  WHERE clientes.id = vendas.cliente_id
//        ( no WHERE criamos uma consiçao para trazer aqueles registros onde a ID do cliente é a 
//        MESMA EM AMBAS AS TABELAS )