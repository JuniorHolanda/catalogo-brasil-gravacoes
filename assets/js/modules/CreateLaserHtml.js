export class CreateLaserHtml {

    createHtml() {
        
        return `
            <section class="laser">
                <div class="laser__header">
                    <h2 class="laser__title">Laser</h2>
                    <p class="laser__text">A gravação a laser é uma técnica de personalização que cria marcas permanentes e de alta qualidade em brindes. Com detalhes nítidos, esse processo garante que o logotipo ou mensagem se destaque de forma durável e sofisticada, ideal para empresas que buscam oferecer produtos personalizados.</p>
                </div>
                <div class="laser__content">
                    <div class="laser__container-reference">
                        <h2 class="laser__reference-title">Referência</h2>
                        <ul class="laser__container-list">
                            <li class="laser__item-reference">Lapiseiras </li>
                            <li class="laser__item-reference">Porta Cartão</li>
                            <li class="laser__item-reference">Pen Drives </li>
                            <li class="laser__item-reference">Canetas</li>
                            <li class="laser__item-reference">Estojos </li>
                            <li class="laser__item-reference">Chaveiros</li>
                            <li class="laser__item-reference">Abridor </li>
                            <li class="laser__item-reference">placa níquel</li>
                            <li class="laser__item-reference">medalha</li>
                        </ul>
                    </div>
                    <ul class="laser__container-price" id="containerPrice">
                        <li class="laser__item-price">1 - 100 <strong>R$ 70,00</strong></li>
                        <li class="laser__item-price">101 - 300 <strong>R$ 0,68</strong></li>
                        <li class="laser__item-price">301 - 500 <strong>R$ 0,66</strong></li>
                        <li class="laser__item-price">501 - 700 <strong>R$ 0,60</strong></li>
                        <li class="laser__item-price">701 - 1000 <strong>R$ 0,55</strong></li>
                        <li class="laser__item-price">1001 - 5000 <strong>R$ 0,50</strong></li>
                    </ul>
                    <div class="laser__container-btn-action">
                        <a href="" class="laser__btn-action">FALE CONOSCO</a>
                    </div>
                    <div class="laser__container-img">
                        <img class="laser__img" src="assets/img/laser/4.jpg" alt="">
                    </div>
                    <div class="laser__container-controlls">
                        <h2 class="laser__controlls-title">Escolha uma medida</h2>
                        <ul class="laser__container-measure-controlls">
                            <li class="laser__measure-controll"><button class="laser__btn-measure-controll" >35x35mm</button></li>
                            <li class="laser__measure-controll"><button class="laser__btn-measure-controll" >35x50mm</button></li>
                            <li class="laser__measure-controll"><button class="laser__btn-measure-controll" >35x70mm</button></li>
                            <li class="laser__measure-controll"><button class="laser__btn-measure-controll" >35x100mm</button></li>
                        </ul>
                    </div>
                </div>
            </section>
        `
    }
}