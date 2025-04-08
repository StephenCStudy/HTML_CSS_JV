let form = document.getElementById('input');
let btn = document.getElementById('btn');
let input = document.getElementById('inputPassword2');
let list = document.getElementById('list'); 

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let text = input.value;
    if (text === "") {
        alert("Không được để trống ");
    } else {
        let li = document.createElement("li");
        li.textContent = text;
        let delBtn = document.createElement("button");
        delBtn.textContent = "Xóa";
        delBtn.onclick = function () {
            if (confirm("Bạn có chắc chắn muốn xóa không?")) {
                list.removeChild(li);
            }
        };
        li.appendChild(delBtn);
        list.appendChild(li);
    }
});