var nome = ["Diego", "Marcela", "João"];

//Mudando valor dos elementos no HTML
var listElements = document.querySelector("#li1");
listElements.textContent = nome[0];

var listElements = document.querySelector("#li2");
listElements.textContent = nome[1];

var listElements = document.querySelector("#li3");
listElements.textContent = nome[2];

var inputElement = document.querySelector("input");

function adicionarElementos(){
    var text = inputElement.value;

    var textElement = document.createTextNode(text);

    var listElements = document.createElement("li");
    listElements.appendChild(textElement);

    var containerElement = document.querySelector("#lista ul");
    containerElement.appendChild(listElements);
    
    document.querySelector('input').value = "";
}

/*var butElement = document.querySelector("#but");
butElement.onclick = function(){

}*/
