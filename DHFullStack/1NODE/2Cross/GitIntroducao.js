// Git é onde serão armazenados em nuvem seu projeto.
// Nele é possivel que outras pessoas compatilhem e trabalhem no mesmo projeto
// e também pode ver com data, hora e quem fez a última alteração.

//  Te permite fazer um backup completo com todas suas versoes e compartilhar os mesmos com
//  as equipes de colaboradores.

// 1 Projeto = 1 Repositorio
// Repositorio local - copia do repositorio em seu computador
// Repositorio remoto - estão na nuvem (GitHub)



//     COMANDOS


// para colar no git (ctrl+V) - utilizamos Shift + Insert.

//  pwd - mostra a pasta onde está

//  git init - cria o repositorio


//  git config user.name "nome do usuario" - define o usuario (necessário para cada projeto)

//  git config user.email "email do usuario" - define o email do usuario (necessário para cada projeto)


//  git config --global user.name "nome do usuario" - define o usuario de forma definitiva

//  git config --global user.email "email do usuario" - define o email do usuario de forma definitiva


//  git remote add origin http://... - adiciona um repositorio remoto 
//  git remote -v   - para verificar se houve o link entre o repositoeio local e o remoto



//  git add . - adiciona TODAS as modificaçoes

//  git add (nome do arquivo) - adiciona apenas o arquivo desejado.

//  git status - status dos arquivos e o status em relaçao ao repositorio (pode nao estar adicionado
//               no repositorio ou apenas foi modificado)

//  git commit -m "mensagem" - comita (salva) as modificaçoes feitas

//  git push origin master - envia as modificaçoes ao repositorio remoto.


// ls - lista os arquivos que estão na pasta


// Fetch - de onde vou trazer os arquivos;
// Push - para onde vou enviar

// mkdir (nome da pasta) - cria uma pasta onde o cd está.

// Commits -  é uma confirmaçao de que informamos o repesitorio  que os arquivos que estamos
// adicionando sejam um pequeno pacote de adiçoes ou modificaçoes, que terao uma marca definitiva
// em um determinado periodo de tempo, e serao assinados por um autor.
// Os Commits geram um ponto cronologico na linha mdo tempo do projeto, o que nos permite identificar
// o status do projeto ate aquele momento especifico e também voltar em algum ponto em qualquer 
// momento.

// Para realizar o commit é necessario ter adicionado os arquivos no repositorio com git add.

//  git commit -m "" (mensagem entre aspas, onde a ideia é informar o trabalho feito ate agora).


// >> Para subir o repositorio local para o  repositorio remoto no GitHub:

//  Importante: sempre que quiser fazer o upload dos seus arquivos para o Github, todos eles devem
//  estar **commitados**.


// git push origin master - envia os arquivos do repositorio local para o repositorio remoto.


// Quando devo fazer um commit?
// É recomendavel que um commit seja feito depois de adicionar uma serir de funcionalidades 
// importantes ao seu projeto e sempre ser uma cersão estavel para nao faça um upload de uma versao 
// que caso alguem baixe faça algo parar de funcionar ou introduza novos erros. 



// *** Branches (ramificaçao) -  uma branche de um repositorio é uma copia alternativa do projeto
// ate aquele momento, é uma linha do tempo paralela na qual pode adiciinar novos recursos sem 
// modificar a linha do tempo original ou afetar i que esta nela.
//  É como se fosse a versao 2 do seu projeto atual na qual pode experimentar coisas novas e se 
// gostar pode ramificar com a versao principal.


// git remote set-url origin (link do repositorio remoto)



// Como baicar arquivos do Github
