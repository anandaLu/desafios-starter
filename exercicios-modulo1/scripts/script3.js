//função que recebe skills como parâmetro
function checarHabilidades (skills){
    //for para percorrer o array skills
    for(var i = 0; i <= skills.length; i++){
        //checa se há Javascript no array de skills
        if(skills[i] === "Javascript"){
            return true;
        }
        //se não houver...
        else{
            return false;
        }
    }
}
//criando vetor de skills
var skills = ["Java", "C#", "React"];
console.log(checarHabilidades(skills));