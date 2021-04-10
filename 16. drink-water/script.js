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
    const fullCups = document.querySelectorAll('.cup-small.full').length;               //Grab the number of currently full cups.
    const totalCups = smallCups.length;                                                 //Grab the number of all the cups.

    if(fullCups === 0) {                                                                //CASE 1: if no cup is full, hide the percentage.
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible'                                         //Else, make it visible and set the height to the ratio of full to total cups, times the height of the div.
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;                        //Then, set the percentage inner text to the percentage currently in use.
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
        liters.innerText = `${250 * fullCups / 1000} L`;
    }
};