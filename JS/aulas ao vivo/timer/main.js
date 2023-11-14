
// setTimeout(function(){
//     alert('Utilizando setTimeout')
// },3000);

window.onload = function(){

    setInterval(()=>{

        let tempo = new Date();
        let horaAtual = tempo.getHours() + " : ";

        horaAtual += tempo.getMinutes()+" : "

        horaAtual += tempo.getSeconds();
        
        document.querySelector('p').innerText=horaAtual
    },1000)
}