let header = document.getElementById('header');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let body = document.getElementById('body');

btn.addEventListener('click', function() {
    body.style.backgroundColor = body.style.backgroundColor === 'black' ? 'white' : 'black';
    text.style.color = text.style.color === 'white' ? 'black' : 'white';
    header.style.color = header.style.color === 'white' ? 'black' : 'white';
    btn.style.backgroundColor = btn.style.backgroundColor === 'white' ? 'black' : 'white';
    btn.style.color = btn.style.color === 'black' ? 'white' : 'black';
});