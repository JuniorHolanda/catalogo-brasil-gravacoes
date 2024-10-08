const listArrowsCalc = document.querySelectorAll('.controller__arrows');
let color = 1
let amount = 1

const btnAmount = document.querySelector('#btnGravacao');
const btnCores = document.querySelector('#btnCores');


btnCores.innerHTML = color

function calculateResult(arrow, type) {



    if (arrow === "increment" && type === "color") {
        if (color == 5) {
            color=0
        }
        color++
        btnCores.innerHTML = color

    } else if (arrow === "increment" && type === "amount") {
        if (amount == 2) {
            amount=0
        }
        amount++
        btnAmount.innerHTML = amount
    } else if (arrow === "decrement" && type === "color") {
        if (color > 1 && color <= 5) {
            color--
            btnCores.innerHTML = color
        } else {
            color = 5
            btnCores.innerHTML = color
        }
    } else if (arrow === "decrement" && type === "amount") {
        if (amount > 1) {
            amount--
            btnAmount.innerHTML = amount
        } else if (amount < 2) {
            amount++
            btnAmount.innerHTML = amount
        }
    }
}

export function calcOrcamento() {
    listArrowsCalc.forEach((btnArrow) => {
        const arrow = btnArrow.dataset.arrow;
        const type = btnArrow.dataset.type;
        btnArrow.addEventListener('click' , () => calculateResult(arrow, type))
    });
}





function pt(p) {
    console.log(p)
}