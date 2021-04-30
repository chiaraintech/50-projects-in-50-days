const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const container = document.getElementById('imgs');
const image = document.querySelectorAll('#imgs img');

let index = 0;

let interval = setInterval(run, 2000);

function run() {
    index++;
    changeImage();
}

function changeImage() {
    if (index > image.length -1) {                                  //If it's the last image, go back to the start at index 0.
        index = 0
    } else if (index < 0) {                                         //If I click to go back but I have the first image, redirect me to the last one.
        index = image.length - 1
    }
    container.style.transform = `translateX(${-index * 500}px)`;    //If it's not at the beginning or the end, move it horizontally.
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    index++;
    changeImage();
    resetInterval()
});

leftBtn.addEventListener('click', () => {
    index--;
    changeImage();
    resetInterval();
});