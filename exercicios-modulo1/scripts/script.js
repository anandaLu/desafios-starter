//função para retornar o endereço a ser passado
function retornarEndereco(){
    //criando objeto
    var endereco = {
        rua: "Rua dos Pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };
    //retornando Strings concatenadas ao objeto
    return "O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + 
    endereco.bairro + ", na rua " + '"' + endereco.rua + '"' + " com nº " + endereco.numero; 
}
//exibindo resultado no console
console.log(retornarEndereco());