import { CreateLaserHtml } from "../modules/CreateLaserHtml.js";

const containerMain = document.querySelector('#wrapper')
const listAmountProductLaser = ['1-100 ', '101-300', '301-500', '501-700', '701-1000', '1001-5000'];

let containerPrice = null

function createPriceLaser(measure) {
    
    const determinePriceLaser = {
        '35x35mm': [70.00, 0.68, 0.66, 0.60, 0.55, 0.50],
        '35x50mm': [90.00, 0.87, 0.85, 0.78, 0.70, 0.65],
        '35x70mm': [90.00, 2.50, 2.45, 2.40, 2.35, 2.00],
        '35x100mm': [100.00, 3.15, 3.10, 3.00, 2.90, 2.80]
    }
    
    return determinePriceLaser [measure] || 'preços não encontrados';
}

// renderiza novo valor com base na medida selecionada
function renderNewPrice(price) {
    //referencia o container para a lista de preços
    containerPrice = document.querySelector('#containerPrice')
    //esvazia o conteúdo do container para a lista de preços
    containerPrice.innerHTML = '' 
    
    // itera sobre a lista de preços e cria uma li para cada e em seguida insere no html
    price.forEach((element, index) => {
        const newPriceLi = document.createElement('li');
        newPriceLi.classList.add('laser__item-price');
        // newPriceLi.innerHTML = `<strong class="controller__price-strong">${listAmountProduct[index]}</strong> R$ ${(result).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

        newPriceLi.innerHTML = `${listAmountProductLaser[index]} <strong>R$ ${(element).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>`
        containerPrice.appendChild(newPriceLi)
    })
}

export function renderLaser() {
    // instância o objeto que cria o html
    const moduleLaserHtml = new CreateLaserHtml()
    // renderiza o html do laser
    containerMain.innerHTML += moduleLaserHtml.createHtml()
    
    // referencia os botões de medidas
    const listMeasure = document.querySelectorAll('.laser__btn-measure-controll');
    listMeasure.forEach(element => {
        const measure = element.innerHTML
        element.addEventListener('click', () => {
            //define novo preço
            const price = createPriceLaser(measure)
            // renderiza novo preço
            renderNewPrice(price)

            console.log(price)
        })
        
    });
}