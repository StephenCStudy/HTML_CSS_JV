let text = document.getElementById('text');
let btn = document.getElementById('btn');
let input = document.getElementById('input');

btn.addEventListener('click', function () {
    let count = input.value.length;
    text.textContent = `Số ký tự: ${count}`;
});