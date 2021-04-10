const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const main = document.getElementById('main');

updateBigCup();

smallCups.forEach((smallCup, index) => {
    smallCup.addEventListener('click', () => 
        highlightCups(index));
});

function highlightCups(index) {

    if ( smallCups[index].classList.contains('full') &&                                 //If the cup is already full,
         !smallCups[index].nextElementSibling.classList.contains('full')) {             //And the next sibling is full as well,
        index--;                                                                        //Decrease the index by 1 position.
    };

    smallCups.forEach((smallCup, smallCupIndex) => {                                    
        if(smallCupIndex <= index) {                                                    //If the small cup is before the overall index,
            smallCup.classList.add('full');                                             //Add to it the class of 'full'.
        } else {
            smallCup.classList.remove('full');                                          //Otherwise remove the class of 'full'.
        };
    });

    updateBigCup();
};

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
        percentage.style.background = 'pink';
        percentage.innerText = "WELL DONE!";
        percentage.style.color = 'magenta';
        percentage.style.display = 'flex';
        percentage.style.alignContent = 'center';
        percentage.style.textAlign = 'center';
        main.style.border = '2px magenta solid';
        
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${250 * fullCups / 1000} L`
    }
}