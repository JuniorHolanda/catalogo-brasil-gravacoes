export class CreateCardCarousel {
    constructor(indexImg, category, media, extension) {
        this.indexImg = indexImg,
        this.category = category,
        this.media = media,
        this.extension = extension
        //this.alt = usar metodo de atribuição de valores para determinar esse atributo
    }

    /*
    o media determina o tipo de media, img, gif, video...
    o category é reponsável pelo pela categoria da media, tampografia, silk, laser...
    o indexImg é responsável pelo nome do arquivo.
    */

    createCardCarousel() {
        const createCard = document.createElement('img');
        createCard.classList.add('carousel__img');
        createCard.src = `/assets/img/${this.category}/${this.indexImg}.${this.extension}`;
        return createCard;
    }
}