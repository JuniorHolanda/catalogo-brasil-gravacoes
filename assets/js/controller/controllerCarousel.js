// importa a classe que cria cards
import { CreateCardCarousel } from "../modules/CreateCardCarousel.js";

// cada valor do índice completa o caminho para a mídia ex: img${01}
const listCarouselTampografiaPequena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const carouselContainer = document.querySelector('#carouselContainer')

// reinicia o índice para qualquer mídia diferente de imagem
let count = 0
export function renderCarousel() {
    listCarouselTampografiaPequena.forEach((element, index) => {
        let category = 'tampografia/itens-pequenos'; //fornece parte do caminho da midia do card
        let media = 'img';
        let extension = 'jpg'
        /* 2 6 e 9 são videos e como os numero referenciam o arquivo ficaria ruim nomear os arquivos com 2.mov, 6.mov, 9.mov ao invez disso eu reinicio a contagen e assim posso nomear os arquivos a partir de 1*/
        if (element == 1 || element == 4 || element == 9) {
            count++
            element = count
            category = 'gif'
            media = 'gif'
            extension = 'gif'
        }
        const newCard = new CreateCardCarousel(element, category, media, extension);
    
        carouselContainer.appendChild(newCard.createCardCarousel());
    });

    function pt(print) {
        console.log(print)
    }
    
}