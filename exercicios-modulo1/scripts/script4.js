//função exibirExperiencia que recebe anos como parâmetro
function exibirExperiencia(anos){
    //checa os anos de experiência
    if(anos === 0 || anos === 1){
        //exibe experiência no console
        console.log("Iniciante");
    }
    else if(anos === 2){
        console.log("Intermediário");
    }
    else if(anos === 3 || anos === 4 || anos === 5 || anos === 6){
        console.log("Avançado");
    }
    else{
        console.log("Jedi Master");
    }
}
exibirExperiencia(20);