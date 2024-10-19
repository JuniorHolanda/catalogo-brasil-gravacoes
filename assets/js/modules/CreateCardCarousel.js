export class CreateCardCarousel {
    constructor(indexImg, extension, container) {
        this.indexImg = indexImg,
        this.extension = extension,
        this.container = container
        //this.alt = usar metodo de atribuição de valores para determinar esse atributo
    }

    createCardCarousel() {
        const createCard = document.createElement('img');
        createCard.classList.add('carousel__img');
        createCard.src = `/assets/img/${this.container}/${this.indexImg}.${this.extension}`;
        return createCard;
    }
}


/*

export class CreateCardSkills {
    constructor(srcImg, title) {
        this.srcImg = srcImg,
        this.title = title,
        this.altImg = this.determineAltImg(title),
        this.dataTooltipGraduation = title,
        this.dataTooltipInfo = this.determinedataTooltipInfo(title),
        this.text = this.determineDescription(title);
        this.level = this.determineLevel(title);
    }


    // Define a descrição com base no nome da habilidade
    determineDescription(title) {
        const descriptionMap = {
            'Photoshop': 'Software de edição gráfica para design de imagens.',
            'Illustrator': 'Aplicativo para criação de gráficos vetoriais.',
            'CorelDraw': 'Ferramenta de design gráfico com vetores e ilustrações.',
            'AfterEffects': 'Programa para edição de vídeo e efeitos visuais.',
            'Figma': 'Ferramenta de design de interfaces UI/UX e prototipagem.',
            'CSS': 'Linguagem de estilo para criar layouts web.',
            'Sass': 'Pré-processador de CSS para estilos mais dinâmicos.',
            'HTML': 'Linguagem de marcação para estruturação de páginas web.',
            'Javascript': 'Linguagem de programação para interação web.'
        };
        return descriptionMap[title];
    }


*/