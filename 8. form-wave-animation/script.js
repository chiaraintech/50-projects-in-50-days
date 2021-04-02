const labels = document.querySelectorAll('.form-control label');
const input = document.querySelector(".email");
const form = document.querySelector(".form-control");

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => 
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

input.addEventListener('keyup', () => {
    input.value !== '' ? form.classList.add('.active') : form.classList.remove('.active')
})