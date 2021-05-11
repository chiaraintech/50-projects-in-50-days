const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let defaultRating = 'Satisfied';

panel.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {            //If the parent node contains rating class
        removeActive();
        e.target.parentNode.classList.add('active');
        defaultRating = e.target.nextElementSibling.innerHTML
    };
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML =
    `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br />
    <strong>Feedback: ${defaultRating}</strong>
    <p>We'll use your feedback to improve our customer support </p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    };
};