const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'You are amazing!',
    'You are super!',
    'You are loved!',
    'Stay strong!',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = getRandomMessage();
    toasts.appendChild(notif)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}