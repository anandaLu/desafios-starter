//função que recebe dois valores nos parâmetros
function exibirNumerosPares(valorMinimo,valorMaximo){
    //criando variavel temp onde é atribuído o valorMinimo.
    //essa variável será incrementada enquanto o seu valor for menor/ igual ao valorMaximo
    for(var temp = valorMinimo; temp <= valorMaximo; temp++){
        //checa os valores que, quando divididos por 2, possuem resto = 0 (Valores pares)
        if(temp %2 === 0){
            var resultado = temp;
            //exibe esses valores no console
            console.log(resultado);
        }
    }
}

exibirNumerosPares(2,10);
