let doDoList = [
    {Dohome: "Đi chợ"},
];
// localStorage.setItem("doDoList", JSON.stringify(doDoList));

function renderList ()  {
    const doDoList = JSON.parse(localStorage.getItem("doDoList"));
    const list = document.querySelector("ul");
    list.innerHTML = "";
    doDoList.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${item.Dohome}
        <button onclick="deleteItem(${index})" style="background-color: red; color: white; margin-right: 10px; padding: 5px 10px; border-radius: 5px; margin-left: 100px; border:none;">Xóa</button>`;
        
        list.appendChild(li);
    });
}
renderList();

let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    const doDoList = JSON.parse(localStorage.getItem("doDoList"));
    if(input.value === "") {
        alert("Bạn chưa nhập nội dung");
        return;
    }

    doDoList.push({Dohome: input.value});
    localStorage.setItem("doDoList", JSON.stringify(doDoList));
    input.value = "";
    renderList();
});

function deleteItem(index) {
    const doDoList = JSON.parse(localStorage.getItem("doDoList"));
    doDoList.splice(index, 1);
    localStorage.setItem("doDoList", JSON.stringify(doDoList));
    renderList();
}