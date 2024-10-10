import { CreatePrice } from "./modules/Createprice.js";
const listArrowsCalc = document.querySelectorAll('.controller__arrows'); // referencia as setas
let containerListPrice = document.getElementById('containerListPrice');

//arrow identifica se a seta incrementa ou decrementa nas extruturas condicionais
//identifica o tipo do botão, se é de quntidade ou de cores
//identifica o valor de botão com o número 
function operationNumber(arrow, valueBtn) {
    if (arrow === 'increment') { 
        valueBtn = (valueBtn < 5) ? valueBtn + 1 : 1; // volta para 1 se for maior que 5
    } else if (arrow === 'decrement') {
        valueBtn = (valueBtn > 1) ? valueBtn - 1 : 5; // avança para 5 se for menor que 1
    }
    return valueBtn // retorna novo valor
}
// RENDERIZA O VALOR DE COLOR E AMOUNT
function renderNumbers(arrow, type) {
    let typeBtn = document.querySelector(`#btn${type}`); // referencia dinâmicamente qual elemento html selecionar com base no type (color ou amount)
    let valueBtn = parseInt(typeBtn.textContent); // converte o valor de typeBtn em número inteiro
    const newValueBtn = operationNumber(arrow, valueBtn); // retorna para newValueBtn o resultado de operationNumber
    const valueListPrice = new CreatePrice(newValueBtn)
    
    containerListPrice.innerHTML = valueListPrice.createHtmlPrice()
    
    typeBtn.textContent = newValueBtn; // rendeiza novo valor na tela
}

// CRIA UM OUVINTE DE CLICK PARA CADA SETA
export function controllerNumbersCounter() {
    listArrowsCalc.forEach((btnArrow) => {
        // captura o elemento data.arrow que indica se a seta é de incremento ou decremento
        const arrow = btnArrow.dataset.arrow;
        // captura o elemento data.type que indica se a seta é do color ou amount
        const type = btnArrow.dataset.type;

        btnArrow.addEventListener('click' , () => renderNumbers(arrow, type))
    });
}