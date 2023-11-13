
// Criando um objeto

const pessoa ={
    nome:'jao',
    sobrenome:'bao',
    idade: 21,
    hobbies:["jogar","ler",'assistir']
}
// resumindo Objeto e tudo entre {}
//para criar um atributo basta o nomeAtributo:
//os atributos devem ser separados virgula
// tbm e possivel utilizar objetos dentro objetos

console.log(pessoa)

// para acessar o atributo basta nome do objeto ponto nome do atributo
console.log(pessoa.nome)


// formas desestruturação

// forma trabalhosa e verbosa

// const nome = pessoa.nome;
// const sobrenome = pessoa.sobrenome;
// const idade = pessoa.idade;
// const hobbies =pessoa.hobbies;


// forma ideal

const{nome:primeiroNome,sobrenome,idade,hobbies}= pessoa; //fez a mesma coisa do codigo acima em apenas uma linha
// tbm e possivel renomea basta nomeAntigo:nomeNovo



// caso deseje adc uma nova propriedade

pessoa.esporte= 'futebol'
console.log(pessoa)
