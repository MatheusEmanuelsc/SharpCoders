

const num =[1,2,3,4,5];
console.log("Lista normal")
console.log(num)

// Map
// map recebe uma lista e ira realizar alguma operação e retorna uma lista

const numMultPor2= num.map(x=> x*2);
//o map recebe uma função  para realizar a operação desejada

console.log("Map: Lista multiplicada por 2")
console.log(numMultPor2)

// Filter
// filter ira receber uma lista ira retorna uma lista filtrada baseado nos parametros que passou
const ePar= num.filter(x=> x%2===0);

console.log("Filter: Lista de pares")
console.log(ePar)

// Reduce
// Reduce e quando nos queremos reduzir o valor para apenas 1

const soma = num.reduce((num,accumulator)=>{return accumulator+num},10)//aonde estar o 10 no caso e opcional ele vc pode substituir ele por qualquer outro pois ele apenas define o valor inicial da  soma

console.log("Reduce: soma de valores")
console.log(soma)

// Qual quer  completo ver na mdn