const listArrowsCalc = document.querySelectorAll('.controller__arrows');
const btnCores = document.querySelector('#btnCores');
const btnGravacao = document.querySelector('#btnGravacao');


function pt(p) {
    console.log(p)
}

console.log(btnGravacao.value)

function calculateResult(index) {
    let arrow = 
}

export function calcOrcamento() {
    listArrowsCalc.forEach((btnArrow, index) => {
        btnArrow.addEventListener('click' , calcOrcamento())
    });
}