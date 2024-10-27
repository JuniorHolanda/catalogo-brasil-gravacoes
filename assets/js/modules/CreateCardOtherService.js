export class CreateCardOtherService {
    constructor(service) {
        this.service = service
        this.title = this.determineTitle(this.service)
        this.text = this.determineText(this.service)
    }

    // determina o titulo do card
    determineTitle(service) {
        const descriptionMap = {
            'laser': 'Laser Rotativo',
            'dtf': 'DTF',
            'baixo-relevo': 'Baixo Relevo',
            'laser-co2': 'Laser Co2'
        };
        return descriptionMap[service] || 'Serviço não encontrado';
    }

    // determina a descrição do card
    determineText(service) {
        const descriptionMap = {
            'laser': 'Gravação de alta precisão usando tecnologia a laser. Ideal para personalizações duráveis.',
            'dtf': 'Transferência digital direta, perfeita para estampas vibrantes. Ótima para diversos tipos de tecidos.',
            'baixo-relevo': 'Criação de efeitos sutis em materiais, proporcionando um toque elegante. Perfeito para detalhes refinados.',
            'laser-co2': 'Gravação a laser CO2 para uma ampla gama de materiais. Ideal para personalizações em madeira, acrílico e mais.'
        };
        return descriptionMap[service] || 'Serviço não encontrado';
    }

    createHtml() {
        return `
            <div class="others__card-content">
                <img class="other__img" src="assets/img/others/${this.service}.jpg" alt="">
                <h3 class="others__card-title">${this.title}</h3>
                <p class="others__text-card">${this.text}</p>
                <a href="https://api.whatsapp.com/send?phone=551155113227" class="others__card-link">Solicitar Orçamento</a>
            </div>
        `
    }
}