//Link for JSON API: https://icanhazdadjoke.com/api
//For application/JSON you might need a header.
//Using FetchAPI.

const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// First attempt using FetchAPI and async/await syntax//

async function generateJoke() {
  const config = { headers: { Accept: 'application/json',},};
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
}



// Second attempt using FetchAPI and .then syntax//

// function generateJoke() {
//     const config = { headers: {'Accept': 'application/json'}}
//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json()).then((data) => {
//         jokeElement.innerHTML = data.joke
//     })
// }