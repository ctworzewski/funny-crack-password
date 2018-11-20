const input = document.getElementById('pass');
const div = document.querySelector('.message');

const password = 'ciasteczko';
const message = 'Brawo! Każdy je lubi';


input.addEventListener('input', (e) => {
    if (password === e.target.value) {
        div.textContent = message;
    } else {
        div.textContent = 'Spróbuj jeszcze raz';
    }
})
