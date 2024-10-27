import { render } from "./assets/js/controller/renderBlockHtml.js";
import { controllerNumbersCounter } from "./assets/js/controller/calcOrcamento.js";
import { renderCarousel } from "./assets/js/controller/controllerCarousel.js";
import { renderLaser } from "./assets/js/controller/renderLaser.js";
import { cloneCarousel } from "./assets/js/controller/cloneCarousel.js";
import { changeImgLaser } from "./assets/js/controller/imgReferenceLaser.js";
import { renderCardOtherServices } from "./assets/js/controller/controllerCardOthersServices.js";

//renderiza os blocos de tampografia e serigrafia
render();

//renderiza o modulo do laser
renderLaser();

// função dos botões de incremento ou decremento
controllerNumbersCounter();

// renderiza o carrossel na tela
renderCarousel('tampografia');

// clona os itens do carrossel tampografia
cloneCarousel('tampografia');

// renderiza o carrossel na tela
renderCarousel('serigrafia');

// clona os itens do carrossel serigrafia
cloneCarousel('serigrafia');

// tempo de troca da imagem de referencia do laser
const interval = 2000

// altera a imagem de referencia do laser
setInterval(changeImgLaser, interval);

//renderiza os cards do other services
renderCardOtherServices()