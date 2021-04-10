const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

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
};