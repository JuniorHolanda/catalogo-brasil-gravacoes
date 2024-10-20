export class CreateBlockHtml {
    constructor(category, dinamicId) {
        this.category = category,
        this.dinamicId = dinamicId,
        this.title = this.determineTitle(this.category),
        this.subTitle = this.determineSubTitle(this.category),
        this.description = this.determineDescription(this.category)
    }

    determineTitle(category) {
        const descriptionMap = {
            'tampografia': 'Tampografia',
            'serigrafia': 'Serigrafia'
        };
        return descriptionMap[category] || 'Categoria não encontrada';
    }

    determineSubTitle(category) {
        const descriptionMap = {
            'tampografia': 'Peças Pequenas',
            'serigrafia': 'Peças em tecidos'
        };
        return descriptionMap[category] || 'Categoria não encontrada';
    }

    determineDescription(category) {
        const descriptionMap = {
            'tampografia': 'Preços para produtos pequenos tais como chaveiros, fones,  porta-joias, carregadores entre outros.',
            'serigrafia': 'Produtos feitos de tecidos precisam ser gravados com SilkScreen'
        };
        return descriptionMap[category] || 'Categoria não encontrada';
    }

    
    renderBlockHtml () {
        return `
        <section class="blockHtml">
            <div class="description">
                <h2 class="description__title">${this.category}</h2>
                <h3 class="description__sub-title">${this.subTitle}</h3>
                <p class="description__text">${this.description}</p>
            </div>

            <div class="carousel">
                <div class="carousel__content" id="${this.dinamicId}">
                    <!-- inserção dos cards via carousel.js -->
                </div>
            </div>

            <div class="controller" id="${this.dinamicId}">
                <div class="controller__container-btn">
                    <div class="controller__container-cores">
                        <i class="controller__arrows controller__arow-up fa-solid fa-angle-up" data-arrow="increment" data-type="Color" data-component="${this.title}"></i>
                        <h2 class="controller__btn" id="btnColor${this.title}" >1</h2>
                        <p class="controller__text">Quantidade de cores</p>
                        <i class="controller__arrows controller__arow-down fa-solid fa-angle-down" data-arrow="decrement" data-type="Color" data-component="${this.title}"></i>
                    </div>
                    
                    <div class="controller__container-gravacao">
                        <i class="controller__arrows controller__arow-up fa-solid fa-angle-up" data-arrow="increment" data-type="Amount" data-component="${this.title}"></i>
                        <h2 class="controller__btn" id="btnAmount${this.title}">1</h2>
                        <p class="controller__text">Quantidade de lados</p>
                        <i class="controller__arrows controller__arow-down fa-solid fa-angle-down" data-arrow="decrement" data-type="Amount" data-component="${this.title}"></i>
                    </div>
                </div>
                
                <div class="contoller__info">
                    <h2 class="controller__title">Orçamento</h2>
                    <p class="controller__text">1 Cor | 1 Gravação</p>
                </div>

                <ul class="controller__container-price" id="containerListPrice${this.title}">

                </ul>

                <a href="#" class="controller__action">Fale conosco</a>
            </div>
            <hr>
        </section>
        `
    }
}