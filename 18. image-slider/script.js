const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let activeSlide = 0;                                                                //First image initalised at index 0.

rightButton.addEventListener('click', () => {
    activeSlide++;                                                                  //Increment the index of the slides by 1 if I click on the right arrow,
    if (activeSlide > slides.length -1) {                                           //If the index is bigger than the amount of slides,
        activeSlide = 0;                                                            //Then reset the index to 0.
    }
    setBgToBody();                                                              
    setActiveSlide();
});

leftButton.addEventListener('click', () => {
    activeSlide--;                                                                  //Decrement the index of the slides by 1 if I click on the left arrow,
    if (activeSlide < 0) {                                                          //If the index is smaller than the starting index of the slides,
        activeSlide = slides.length - 1                                             //Then make the next active slide the last one of the array.
    }
    setBgToBody();
    setActiveSlide();
});

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;         //Set the background image according to the URL of the index of the image in the slide.
};

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
};