let box = document.getElementById('box');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let hide = document.getElementById('hide');

btn.addEventListener('click', function(){
    box.style.display = box.style.display == 'none' ? 'block' : 'none';
    text.style.display = text.style.display == 'none' ? 'block' : 'none';
    hide.style.display = hide.style.display == 'none' ? 'block' : 'none';
});
hide.addEventListener('click', function(){
    box.style.display = box.style.display == 'none' ? 'block' : 'none';
    text.style.display = text.style.display == 'none' ? 'block' : 'none';
    hide.style.display = hide.style.display == 'none' ? 'block' : 'none';
});