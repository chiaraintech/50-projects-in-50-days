const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//I give each function a key.
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) { return }

    textarea.value = password;
    document.body.appendChild(textarea);                //Grabbing the text area and putting it into the body.
    textarea.select();                                  //Selecting everything in the text area.
    document.execCommand('copy');                       //Copy whatever is selected.
    textarea.remove();
    alert('Password is copied to the clipboard.');
})  

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol                      //Checking that I have 4 conditions checked.
    const typesArr = [{lower}, {upper}, {number}, {symbol}]
                    .filter(item => Object.values(item)[0]);                //Filtering out any condition that has false as a value.
                
    if (typesCount === 0) {
        return ''
    } for (let i = 0; i < length; i += typesCount) {                          //I loop through whatever the length of the types is,
        typesArr.forEach(type => {                                          //For each type (true), I set a function that gets the name as the first element.
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]()                      //I call the generatePassword method using the randomFunc data on each type.
        })
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

//Creating functions to generate the conditions to generate the password.

//1. I am getting a random lower case letter by using the fromCharCode method on the String object.
//As there are 27 letters in the alphabet, I get a random number and I multiply it by 26, and then I add 97, which is the charcode for a.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//2. Getting the random upper case letter now.
//Changing the range from 97 to 65, because in the chart, the first letter in uppercase, A, is 65.
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//3. Now let's generate a random number. Instead of 65 it'll be 48, as 0 has the code of 48.
//I multiply now for 10 because I only want a max of 10 numbers.
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//4. Now let's get a random symbol. In this case I already have a string of symbols.
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}