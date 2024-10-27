import { CreateCardOtherService } from "../modules/CreateCardOtherService.js";

// listas com os outros serviços
const listOtherService = ['laser', 'dtf', 'baixo-relevo', 'laser-co2'];

export function renderCardOtherServices() {
    const containerOtherService = document.querySelector('#containerOtherService');
    let newCardService = null
    let content = ''
    listOtherService.forEach(element => {
        newCardService = new CreateCardOtherService(element);
        content += newCardService.createHtml()
    })
    containerOtherService.innerHTML = content
}

