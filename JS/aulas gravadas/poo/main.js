// Criando uma classe
class Pessoa{

    // atributos
    constructor(nome,sobrenome,idade){

        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade;
    }

    // metodo

    getNomeCompleto(){

        console.log(`Nome completo: ${this.nome} ${this.sobrenome}`)
    }
    // metodo statico

    static falaOi(){
        console.log("Oi")
    }

}

// Instanciando
const  pessoa = new Pessoa('jao','bao',20);

console.log(pessoa)
pessoa.getNomeCompleto()

Pessoa.falaOi()


// Herança
class Funcionario extends Pessoa{

    constructor(nome,sobrenome,idade,funcao){

        super(nome,sobrenome,idade)
        this.funcao = funcao;

    }
}

const func1= new Funcionario('jao','bao',23,'auxiliar');

console.log(func1)