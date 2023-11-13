
// Strings

// String são tudo que estão dentro de  '' , "" ou ``

let  m = "Ola";

console.log(m.length); //lengh traz a quantidade de caracteres

let n = "iai";


// -------------Metodos de Cocatenação-----------------

// primeira forma de cocatenação
console.log("Oi "+m+n) // use + para concatenar Strings  e variavies

// segunda forma de cocatenação
console.log(`oi ${m} ${n}`) // use `` dentro delas escreva normal ai quando for utlizar a variavel ponha dentro de ${}


//-------------Modificado entre Maiuscula e Minuscula-------------------


console.log(m.toUpperCase());//toUppeCase deixa Maiuscula
console.log(m.toLowerCase());//toLowerCase deixa Minuscula


//----------------------Transformando texto em uma Lista--------------------

let nomes = 'jao,bao,zao';
console.log(nomes.split(','));//split() para fazer isso dentro dos pareteses vc ponhe oque ira fazer separar.

// Outros metodos String basta consultar mdn

