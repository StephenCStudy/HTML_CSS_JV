

const thumbnail = document.getElementById('thumbnail');
const overlay = document.getElementById('overlay');

thumbnail.addEventListener('click', () => {
  overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
});