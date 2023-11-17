
//----------------------Selecionando Elementos-------------------


// selecionando forma antiga
// const adcUser =  document.getElementById('add-user');

// selecionando nova forma
const adcUser =  document.querySelector('#add-user');




// selecionando multiplos elementos
const  todosItens = document.querySelectorAll(".item");



//-----------------------Manipulando Elementos-----------------------

const items = document.querySelector('.items');
const button = document.querySelector('.btn');
// removendo elementos
// items.remove()

// selecionando o primeiro filho
// items.firstElementChild.remove();
// pode-se remover o ultimo tbm

// manipulando conteudo
items.children[1].textContent='ITEM 2'

// adc uma tag  e conteudo
items.children[0].innerHTML= "<h1>Ola mundo</h1>"

//Modificando o estilo
button.style.backgroundColor = "red";
