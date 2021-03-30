const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');
let loadPercentage = 0;

const blurring = () => {
    loadPercentage++;
        if (loadPercentage > 99) {
            clearInterval(interval)
        }
    loadText.innerText = `${loadPercentage}%`;
    loadText.style.opacity = scale(loadPercentage, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loadPercentage, 0, 100, 30, 0)}px)`
}

let interval = setInterval(blurring, 30);
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}