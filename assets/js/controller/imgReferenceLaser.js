let count = 1;

export function changeImgLaser() {
    const imgLaserReference = document.querySelector('#imgLaserReference');
    imgLaserReference.src = `assets/img/laser/${count}.jpg`
    count = (count >= 10) ? 1 : count + 1; // se a condição for falsa count = 1 se for verdade incrementa 1 no count
    console.log(imgLaserReference.src);
}