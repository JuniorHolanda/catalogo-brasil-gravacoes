import { CreateBlockHtml } from "../modules/createBlockHtml.js";
// armazena as categorias
const listBlockHtml = ['tampografia', 'serigrafia'];

// referencia o container principal
const wrapper = document.querySelector('#wrapper');

// cria a lista de referência
function createListReference(element) {
    
    //capitaliza o element
    const elementCapitalized = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    
    //referencia o container dinâmicamente com base no element
    const containerReference = document.querySelector(`#containerReference${elementCapitalized}`);

    const descriptionMap = {
        'tampografia': ['Chaveiros', 'Fone', 'Porta-joias', 'Carregador', 'Plaquinha', 'Pendrive', 'Caixinha de som', 'Caderno', 'Moleskine'],
        'serigrafia': ['Térmica', 'Sacola', 'Bolsa', 'Mochila', 'Mala', 'Avental', 'Táboa', 'Trash Bag', 'Camiseta']
    };

    //validação
    if (!descriptionMap[element]) {
        return null;
    }

    // renderiza a lista de referência
    descriptionMap[element].forEach(element => {
        const refrenceItem = document.createElement('li');
        refrenceItem.classList.add('controller__reference-li');
        refrenceItem.innerHTML = element;
        containerReference.appendChild(refrenceItem);
    });
}

//cria e renderiza a tampografia e a serigrafia
export function render() {
    listBlockHtml.forEach(element => {
        const dinamicId = `carousel_container_${element}`;
        const blockHtml = new CreateBlockHtml(element , dinamicId);
        wrapper.innerHTML += blockHtml.renderBlockHtml();
        createListReference(element);
    });
}