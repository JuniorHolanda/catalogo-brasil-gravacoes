export class CreateCardCarousel {
    constructor(indexImg, category, media, alt) {
        this.indexImg = indexImg,
        this.category = category,
        this.media = media
        //this.alt = usar metodo de atribuição de valores para determinar esse atributo
    }

    /*
    o media determina o tipo de media, img, gif, video...
    o category é reponsável pelo pela categoria da media, tampografia, silk, laser...
    o indexImg é responsável pelo nome do arquivo.
    */

    createCardCarousel() {
        switch (this.media) {
            case 'img':
                const createCard = document.createElement('img');
                createCard.classList.add('carousel__img');
                createCard.src = `/assets/img/${this.category}/${this.indexImg}.jpg`;
                return createCard;
            
            case 'video':
                const createCardVideo = document.createElement('video')
                createCardVideo.classList.add('carousel__img');
                createCardVideo.src = `/assets/video/${this.indexImg}.mov`
                createCardVideo.muted = true;
                createCardVideo.autoplay = true;
                createCardVideo.loop = true;
                return createCardVideo;
        }
    }
}


/*
<div class="carousel__content">
    <img class="carousel__img" src="assets/${this.media}/${this.category}/${this.indexImg}.jpg" alt="">
    <img class="carousel__img" src="assets/${this.media}/${this.category}/${this.indexImg}.jpg" alt="">
    <video class="carousel__img" src="assets/video/${this.indexImg}.mov" muted autoplay loop ></video>
    <img class="carousel__img" src="assets/${this.media}/${this.category}/${this.indexImg}.jpg" alt="">
    <img class="carousel__img" src="assets/${this.media}/${this.category}/${this.indexImg}.jpg" alt="">
    <video class="carousel__img" src="assets/video/${this.indexImg}.mov" muted autoplay loop ></video>
    <img class="carousel__img" src="assets/${this.media}/${this.category}/${this.indexImg}.jpg" alt="">
</div>
*/