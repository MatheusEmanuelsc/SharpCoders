
window.onload = ()=>{

    let botao = document.createElement('button');
    botao.innerText="Clique"

    botao.addEventListener('click',()=> alert("Clicou"));

    document.querySelector('body').appendChild(botao);
}