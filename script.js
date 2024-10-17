//gera os blocos html
import { render } from "./assets/js/controller/renderBlockHtml.js";
// função dos botões de incremento ou decremento
import { controllerNumbersCounter } from "./assets/js/calcOrcamento.js";
// renderiza o carrossel na tela
import { renderCarousel } from "./assets/js/controller/controllerCarousel.js";
//clona o carrossel
import { cloneCarousel } from "./assets/js/controller/cloneCarousel.js";

render();

controllerNumbersCounter();
renderCarousel();
cloneCarousel();
