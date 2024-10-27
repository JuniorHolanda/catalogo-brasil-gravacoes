
// clona os cards para criar o efeito de carousel infinito
export function cloneCarousel(type) {
    const containerCarousel = document.querySelector(`#carousel_container_${type}`);
    const ListCarouselItem = document.querySelectorAll(`.carousel__img-${type}`);
    console.log(containerCarousel)
    ListCarouselItem.forEach(element => {
        // clona o item do carousel
        const clone = element.cloneNode(true);
        containerCarousel.appendChild(clone);
    });
}