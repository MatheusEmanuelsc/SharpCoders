

const nomeInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subButton = document.querySelector('#submit-button');

const items = document.querySelector('.items');
const erroMensagem = document.querySelector('.msg');
subButton.addEventListener('click',(e)=>{

    e.preventDefault();

    const nomeValor = nomeInput.value;
    const emailValor= emailInput.value;


    if (nomeValor === '' || emailValor === '') {
        
        erroMensagem.textContent ='Preencha o form'
        erroMensagem.classList='error';
        return;
    }


    const li = document.createElement('li');
    
    li.classList='item';
    li.textContent = `Nome: ${nomeValor}, Email: ${emailValor}`;

    items.appendChild(li);
})

