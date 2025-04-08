let form = document.getElementById('input');
let btn = document.getElementById('btn');
let input = document.getElementById('inputPassword2');
let notion = document.getElementById('notion');


btn.addEventListener('click', function (e) {
    e.preventDefault();
    let inputValue = input.value;
    if (inputValue.endsWith('@gmail.com')) {
        notion.textContent = 'Email hợp lệ !';
        notion.style.color = 'green';
    } else {
        notion.textContent = 'Email không hợp lệ !';
        notion.style.color = 'red';
    }
});