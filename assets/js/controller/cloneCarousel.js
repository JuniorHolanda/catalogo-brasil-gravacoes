import { carouselContainer } from "./controllerCarousel.js";

// clona os cards para criar o efeito de carousel infinito
export function cloneCarousel() {
    const ListCarouselItem = document.querySelectorAll('.carousel__img');
    ListCarouselItem.forEach(element => {
        // clona o item do carousel
        const clone = element.cloneNode(true);
        carouselContainer.appendChild(clone);
    });
}