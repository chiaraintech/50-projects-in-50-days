const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {                                                       //If current number is smaller than the target,
            counter.innerText = `${Math.ceil(current + increment)}`;                  //We take the counter and we set the inner text to increment + current number;
            setTimeout(updateCounter, 1);                                             //We want to keep calling updateCounter every second
        } else {
            counter.innerText = target;                                               //We don't want to go above the target number.
        }
    }
    updateCounter();
});