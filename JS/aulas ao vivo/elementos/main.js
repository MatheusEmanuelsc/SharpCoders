let estado = ['sp','rj','rs','md','mt']

// ao carregar
window.onload = function () {
    
    // pegando elemento
    let lista = document.getElementsByTagName('ul')[0];

    

    for(let i =0 ; i < estado.length;i++){

        let item = document.createElement('li');

        item.innerHTML=estado[i];
        lista.appendChild(item);
    }


    
}