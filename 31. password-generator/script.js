//Creating a few functions to generate the conditions to generate the password.

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
//I multiply now for 10 because I only want a max of 9 numbers.
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//4. Now let's get a random symbol. In this case I already have a string of symbols.
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}