const tagsElement = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();  //automatically putting the focus on the text area;

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
})

function createTags(input) {
    const tags = input.split(',')
                .filter(tag => tag.trim() !== '')
                .map(tag => tag.trim());

    tagsElement.innerHTML = '';
    
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsElement.append(tagElement);
    })
}