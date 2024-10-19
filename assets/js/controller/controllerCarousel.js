// importa a classe que cria cards
import { CreateCardCarousel } from "../modules/CreateCardCarousel.js";

// cada valor do índice completa o caminho para a mídia ex: img${1}
const listCarouselTampografiaPequena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// o caminho é atribuido dentro do escopo da função renderCarousel
export let carouselContainer = null
export let carouselContainerSerigrafia = null

//renderiza o carrossel
export function renderCarousel(containerCarousel) {
    // atribui o caminho para container do carrossel de tampografia
    carouselContainer = document.querySelector('#carousel_container_tampografia');
    
    // atribui o caminho para container do carrossel de serigrafia
    carouselContainerSerigrafia = document.querySelector('#carousel_container_serigrafia');

    listCarouselTampografiaPequena.forEach(element => {
        // let category = 'tampografia'; //fornece parte do caminho da midia do card
        let media = 'img'; //src da img
        let extension = 'jpg' //src da img
        const container = containerCarousel

        // separa elementos que receberão gifs
        if (element == 3 || element == 6 || element == 9) {
            extension = 'gif';//src da img
        }
        const newCard = new CreateCardCarousel(element, extension, container);
        
        if (containerCarousel == 'tampografia') {
            carouselContainer.appendChild(newCard.createCardCarousel()); //renderiza o carousel de serigrafia
        } else {
            carouselContainerSerigrafia.appendChild(newCard.createCardCarousel());
        }
    });
}