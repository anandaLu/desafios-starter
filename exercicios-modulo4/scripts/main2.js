//pegando valores do HTML
var inputElement = document.querySelector('input');
var paraElement = document.querySelector('#para');

//função que será acionada ao clicar no botão
function buscarApi(){
    //pega o valor do elemento input
    var text = inputElement.value;
    //realiza a requisição concatenando link com o valor do input
    var textElement = axios.get('https://api.github.com/users/' + text)
    
    //primeira parte - Quando dá certo(response)
    .then(function(response){

        //criando variável resultado e atribuindo o valor do repos_url
        setTimeout(function(){
            var resultado = response.data.repos_url;
        //exibindo no console
            console.log(resultado);
        //atribui o valor da variavel resultado à variável textElement
            var textElement = document.createTextNode(resultado);
        //atribui textElement como filho do elemento paraElement
            paraElement.appendChild(textElement);

            var listElement = document.createElement("li");
            listElement.appendChild(paraElement);

            var ulElement = document.querySelector("ul");
            ulElement.appendChild(listElement);

            document.querySelector('input').value = "";
        
        }, 200);
    })
    //caso dê errado...
    .catch(function(error){
        console.warn("Informe novamente o nome de usuário.");
    });

}

