export class CreatePrice {
    constructor(multiplier, component, typeBtn) {
        this.multiplier = multiplier
        this.component = component
        this.price = this.determinePrice(component)
        this.typeBtn = this.determinetype(typeBtn)
    }

    determinetype(typeBtn) {
        const descriptionMap = {
            'btnColorTampografia': 'Color',
            'btnColorSerigrafia': 'Color',
            'btnAmountSerigrafia': 'Amount',
            'btnAmountTampografia': 'Amount'
        }
        const btnId = typeBtn.id;

        return descriptionMap[btnId] || 'preços não encontrados';
    }

    // retorna os preços baseado no componente que pode ser tampografia, serigrafia, laser etc 
    determinePrice(component) {
        const descriptionMap = {
            'Tampografia': [165, 1.55, 1.30, 1.00, 0.99, 0.85],
            'Serigrafia': [180, 1.85, 1.70, 1.65, 1.55, 1.45]
        };

        return descriptionMap[component] || 'preços não encontrados';
    }

    createHtmlPrice() {
        // referencia os btnColor
        const colorBtn = document.querySelector(`#btnColor${this.component}`);
        //converte o btnColor para number
        const valueColorBtn = parseInt(colorBtn.innerHTML)
        
        // referencia os btnAmount
        const amountBtn = document.querySelector(`#btnAmount${this.component}`);
        //converte o btnAmount para number
        const valueAmountBtn = parseInt(amountBtn.innerHTML)

        // listas de preços padrão pra todos os produtos
        const listAmountProduct = ['1-100 ', '101-300', '301-500', '501-700', '701-1000', '1001-5000']
        
        const listPrice = this.price
        const liContainer = document.createElement('ul');
        liContainer.className = 'controller__container-price';
        
        listPrice.forEach((element, index) => {
            let result = '' 
            if (this.typeBtn == 'Color') {
                result = valueAmountBtn * this.multiplier * element // multiplica o preço do listPrice com base no valor multiplicador
            } else {
                result = valueColorBtn * this.multiplier * element // multiplica o preço do listPrice com base no valor multiplicador
            }
            const liElement = document.createElement('li');
            liElement.className = 'controller__price-value';
            liElement.innerHTML = `<strong class="controller__price-strong">${listAmountProduct[index]}</strong> R$ ${(result).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
            liContainer.appendChild(liElement);
        });
        return liContainer
    }
}

