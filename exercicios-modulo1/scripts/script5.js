//criando objeto
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
//função para exibir resultado
function exibirResultado(){
    //for...of (iterador = usuario, objeto = usuarios)
    for (var usuario of usuarios) {
        //utilizando a função join com separador
        var resposta = usuarios.join("O " + usuario.nome + 
        " possui as habilidades: " + usuario.habilidades);
        console.log(resposta);
    }
}

exibirResultado();