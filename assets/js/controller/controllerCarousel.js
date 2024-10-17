// importa a classe que cria cards
import { CreateCardCarousel } from "../modules/CreateCardCarousel.js";

// cada valor do índice completa o caminho para a mídia ex: img${1}
const listCarouselTampografiaPequena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// o caminho é atribuido dentro do escopo da função renderCarousel
export let carouselContainer = null
export let carouselContainerSerigrafia = null

// reinicia o índice para qualquer mídia diferente de imagem
let count = 0
export function renderCarousel() {
    // atribui o caminho para carouselContainer
    carouselContainer = document.querySelector('#carousel_container_tampografia');
    carouselContainerSerigrafia = document.querySelector('#carousel_container_serigrafia');


    listCarouselTampografiaPequena.forEach(element => {
        let category = 'tampografia/itens-pequenos'; //fornece parte do caminho da midia do card
        let media = 'img'; //src da img
        let extension = 'jpg' //src da img

        // separa elementos que receberão gifs
        if (element == 1 || element == 4 || element == 9) {
            count++; // incrementa +1 no count
            element = count; //atribui novo valor ao element reiniciando o valor das div
            category = 'gif';//src da img
            media = 'gif';//src da img
            extension = 'gif';//src da img
        }
        const newCard = new CreateCardCarousel(element, category, media, extension);
    
        carouselContainer.appendChild(newCard.createCardCarousel());
        carouselContainerSerigrafia.appendChild(newCard.createCardCarousel());
    });
}