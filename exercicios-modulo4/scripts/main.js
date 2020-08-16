//Função para checar se é maior ou menor de idade
//recebe idade como parâmetro
function checarIdade(idade){
    //retorna uma Promise
    return new Promise(function(resolve,reject){
        //setTimeout fará retornar o resultado após 2 segundos (2000 milisegundos)
        setTimeout(function(){
            if(idade>=18){
                resolve();
            }else{
                reject();
            }
        }, 2000)
    });
}

checarIdade(15)
    //Exibir os resultados da função checar idade 
    //se aceitar a condição (if), exibirá o then
    .then(function(){
        console.log("Maior que 18");
    })
    //se não aceitar if, exibirá o catch
    .catch(function(){
        console.log("Menor que 18");
    });