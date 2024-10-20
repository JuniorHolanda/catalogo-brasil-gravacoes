export class CreatePrice {
    constructor(multiplier, component) {
        this.multiplier = multiplier
        this.price = this.determinePrice(component)
    }

    // retorna os preços baseado no componente que pode ser tampografia, serigrafia, laser etc 
    determinePrice(component) {
        const descriptionMap = {
            'tampografia': [165, 1.55, 1.30, 1.00, 0.99, 0.85],
            'serigrafia': [190, 1.65, 6.60, 6.60, 60.69, 6.65]
        };

        return descriptionMap[component] || 'preços não encontrados';
    }

    createHtmlPrice() {
        const listPrice = this.price
        const liContainer = document.createElement('ul');
        liContainer.className = 'controller__container-price';
        
        listPrice.forEach(element => {
            const result = this.multiplier * element // multiplica o preço do listPrice com base no valor multiplicador
            const liElement = document.createElement('li');
            liElement.className = 'controller__price-value';
            liElement.innerHTML = `<strong class="controller__price-strong">1-100</strong> R$ ${(result).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
            liContainer.appendChild(liElement);
        });
        return liContainer
    }
}