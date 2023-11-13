
// Criando um objeto

const pessoa ={
    nome:'jao',
    sobrenome:'bao',
    idade: 21,
    hobbies:["jogar","ler",'assistir']
}

console.log("Objeto")
console.log(pessoa)

// transformando um objeto em json

let pessoaJson= JSON.stringify(pessoa)
// caso vc  queria por exmeplo converter uma lista de objetos para json basta por pessoa[indice] ai ele ira converte apenas 1
console.log("Json")
console.log(pessoaJson)

// formatando json para Objeto

let pessoaObjeto = JSON.parse(pessoaJson);

console.log("Objeto dnv")
console.log(pessoaObjeto)
