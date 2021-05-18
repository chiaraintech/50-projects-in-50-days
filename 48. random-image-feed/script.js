const container = document.querySelector('.container');
const URL = 'https://source.unsplash.com/random/';
const rows = 10;

for (let i=0; i < rows * 3; i++) {
    const image = document.createElement('img');
    image.src = `${URL}${getRandomSize()}`;
    container.appendChild(image)
}

function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}