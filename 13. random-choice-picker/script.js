const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {                                 //If user clicks 'Enter', reset the value to empty string in 10ms.
        setTimeout(() => {
            e.target.value = ''
        }, 10);

        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());          //Get each tag content by manipulating the input.
    
    tagsElement.innerHTML = '';                                                                     //Start with the content of the tags to be null.

    tags.forEach(tag => {                                                                           //For each tag:
        const tagElement = document.createElement('span');                                          //Create tag element of type span,
        tagElement.classList.add('tag');                                                            //Add to the tag element the class of 'tag',
        tagElement.innerText = tag;                                                                 //Assign to the tag element the content of tag,
        tagsElement.appendChild(tagElement);                                                        //Append this last tag element to the overall tags.
    });
};

function randomSelect() {                                                                           
    const times = 30;                                                                               //The number of times it'll highlight the tag before it stops.
    const interval = setInterval(() => {                                                            //I set the interval variable using setInterval(),
        const randomTag = pickRandomTag();                                                          //I get the random tag element using the function defined below,
        highlightTag(randomTag);                                                                    //I highlight the selected random tag element,
    
    setTimeout(() => {                                                                              //I define a setTimeout() of 100ms to unhighlight the random tag
            unHighlightTag(randomTag);
        }, 100);
    }, 100);                                                                                        //The overall interval lasts 100ms

    setTimeout(() => {
        clearInterval(interval);                                                                    //I call clearInterval() to stop the setInterval() function.
        setTimeout(() => {                                                                          //I define a setTimeout() of 100ms to highlight a random tag to stop on.
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);                                                                                    //After 100ms, I highlight a random tag, and it stays.

    }, times * 100);                                                                                //I want this timeout to run after every 300ms.
};

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
};

function highlightTag(tag) {
    tag.classList.add('highlight');
};

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
};