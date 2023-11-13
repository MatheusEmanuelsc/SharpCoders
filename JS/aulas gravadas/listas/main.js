

const nomes= ['jao','bao','zao','gab','tai']; //criando uma lista para criar  e basicamente [] ai os valores dentro separados ,
console.log(nomes)
//------------------------acessando valores--------------------------

// toda lista inicia com 0
console.log(nomes[0]);// para acessar so por nome da lista + [] e dentro dos pareteses e a posição


//-----------------------adc valores ao final da lista------------------


nomes.push("kai");
console.log(nomes)

//-----------------------adc valores no inicio da lista-------------------

nomes.unshift('zen');
console.log(nomes)

//-----------------------removendo valores ao final da lista----------------

nomes.pop();
console.log(nomes)

//-----------------------atualizando valores--------------------------------

nomes[3] ='sai';
console.log(nomes)

//-----------------------verificando indice do elemento----------------------

console.log(nomes.indexOf('jao'))

//-----------------------ordenando uma lista----------------------------------

let nomesOrdenados = nomes.sort();
console.log(nomesOrdenados);

//-----------------------metodo retorna a quantidade de itens na lista----------

console.log(nomes.length);

//-----------------------verificando se e uma lista------------------------------

let nomeELista = Array.isArray(nomes);

console.log(nomeELista)
// outros metodos basta olha no mdn
