const container = document.getElementById('container');
const colours = ['pink', 'yellow', 'red', 'deeppink', 'green', 'blue'];
const squares = 500;

for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColour(square));
    square.addEventListener('mouseout', () => removeColour(square));
    container.appendChild(square);
};

function setColour (element) {
    const colour = getRandomColour();
    element.style.background = colour;
    element.style.boxShadow = `0 0 2px ${colour}, 0 0 10px ${colour}`;
};

function removeColour (element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
};

function getRandomColour () {
    return colours[Math.floor(Math.random() * colours.length)];
};