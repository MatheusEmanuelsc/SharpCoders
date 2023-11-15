// quando vc quer inicia uma loop e consegue determinar o  final use o for
for (let i = 0; i < 5; i++) {
    
    console.log(i)
    
}


let nomes =['jao','bao','zao','gab','tai']

// caso esteja pecorrendo um array pode usar a propriedade .length que ele retorna o valor do tamanho do array
for (let i = 0; i < nomes.length; i++) {
    
    console.log(nomes[i])
    
}

// outro tipo de for
// for of

for (let nome of nomes){
    console.log(nome)
}

// foreach

nomes.forEach((nome,i)=>{
    console.log(i);
    console.log(nome)
})


for (const key in nomes) {
    
    console.log(nomes[key]);
}