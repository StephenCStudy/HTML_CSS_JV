let input = document.getElementById('input');
let ul = document.getElementById('list');

function addNew(e) {
    e.preventDefault();
    if (input.value === '') {
        alert('Please enter a value!');
        return;
    }

    let li = document.createElement('li');
    let content = input.value;
    li.innerHTML = `
        ${content} <button class="delete btn btn-danger me-md-4" onclick="deleteItem(event)">Xóa</button>
    `;

    ul.appendChild(li);
    input.value = '';
    localStorage.setItem('list', ul.innerHTML);
}

function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        localStorage.setItem('list', ul.innerHTML);
    }
}

window.onload = () => {
    ul.innerHTML = localStorage.getItem('list') || '';
};