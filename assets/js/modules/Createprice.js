export class CreatePrice {
    constructor(multiplier) {
        this.multiplier = multiplier
    }
    

    createHtmlPrice() {
        return `
            <ul class="controller__container-price">
                    <li class="controller__price-value"><strong class="controller__price-strong">1-100</strong> R$${ (this.multiplier * 165).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</li>
                    <li class="controller__price-value"><strong class="controller__price-strong">101-300</strong> R$${ (this.multiplier * 1.55).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</li>
                    <li class="controller__price-value"><strong class="controller__price-strong">301-500</strong> R$${ (this.multiplier * 1.30).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</li>
                    <li class="controller__price-value"><strong class="controller__price-strong">501-700</strong> R$${ (this.multiplier * 1.00).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</li>
                    <li class="controller__price-value"><strong class="controller__price-strong">701-1000</strong> R$${ (this.multiplier * 0.99).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</li>
                    <li class="controller__price-value"><strong class="controller__price-strong">1001-5000</strong> R$${ (this.multiplier * 0.85).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</li>
            </ul>
        `
    }
}