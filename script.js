const form = document.getElementById('form');
const input = document.getElementById('input');
const content = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  content.innerHTML = input.value;
});
