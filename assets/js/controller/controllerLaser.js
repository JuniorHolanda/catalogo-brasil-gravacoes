//referencia os botões largura máxima que ficam em cima
const mainBtnMeasure = document.querySelectorAll('.laser__btn-measures');
//referencia as medidas
const listBtnMeasure = document.querySelectorAll('.laser__measure-controll');

function newvalueMeasure (measure) {
    console.log(measure)
}

// itera sobre os botões de medidas principais
export function teste () {
    mainBtnMeasure.forEach(element => {
        const measure = element.dataset.measure;
        console.log('fora do ouvinte')
        element.addEventListener('click', () => {
            console.log('dentro do ouvinte')
            newvalueMeasure(measure)
        })
    });
}