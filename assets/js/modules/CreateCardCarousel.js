export class CreateCardCarousel {
    constructor(indexImg, extension, container) {
        this.indexImg = indexImg,
        this.extension = extension,
        this.container = container
    }

    createCardCarousel() {
        const createCard = document.createElement('img');
        createCard.classList.add(`carousel__img-${this.container}`);
        createCard.src = `/assets/img/${this.container}/${this.indexImg}.${this.extension}`;
        return createCard;
    }
}