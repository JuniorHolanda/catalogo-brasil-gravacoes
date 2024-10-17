import { CreateBlockHtml } from "../modules/createBlockHtml.js";
// armazena as categorias
const listBlockHtml = ['tampografia', 'serigrafia'];

// referencia o container principal
const wrapper = document.querySelector('#wrapper');

export function render() {
    listBlockHtml.forEach(element => {
        const dinamicId = `carousel_container_${element}`
        const blockHtml = new CreateBlockHtml(element , dinamicId);
        wrapper.innerHTML += blockHtml.renderBlockHtml();
    });
}