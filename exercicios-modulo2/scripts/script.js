//pegando o elemento button no documento HTML
var btnElement = document.querySelector("button");

//A seguinte função é atribuída ao clique do botão
btnElement.onclick = function(){
    //pegando o elemento com classe = .box no documento HTML
    var boxElement = document.querySelector('.box');
    
    //definindo o tamanho e uma cor para boxElement criando elementos CSS
    boxElement.style.width = "100px";
    boxElement.style.height = "100px";
    boxElement.style.backgroundColor = newColor;
}

//Gerando cores aleatórias
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//atribuindo a função getRandomColor() à variável newColor
var newColor = getRandomColor();