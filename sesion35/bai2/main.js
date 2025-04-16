let btn = document.getElementById("btn");
let box = document.getElementById("box");
let exit = document.getElementById("exit");
let container = document.getElementById("container");
let data = JSON.parse(localStorage.getItem("data")) || [];
localStorage.setItem("data", JSON.stringify(data));

btn.addEventListener('click', function (event) {
    box.style.display = "block";
    container.style.opacity = "0.5";
    event.stopPropagation();
});

exit.addEventListener('click', function (event) {
    box.style.display = "none";
    event.stopPropagation();
    container.style.opacity = "1";
});

let btnSave = document.getElementById("btnSave");
btnSave.addEventListener('click', function (event) {
    addData();
    box.style.display = "none";
    event.stopPropagation();
    container.style.opacity = "1";
});

function addData() {
    let website = document.getElementById("website");
    let weburl = document.getElementById("weburl");
    if (website.value.trim() == "" || weburl.value.trim() == "") {
        alert("Please fill in the required fields");
        return;
    }
    data.push({
        "website": website.value.trim(),
        "weburl": weburl.value.trim(),
    });
    localStorage.setItem("data", JSON.stringify(data));
    website.value = "";
    weburl.value = "";
    alert("Data added successfully");
    renderData();
}

function renderData() {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let ul = document.getElementById('ul');
    ul.innerHTML = '';
    data.forEach(function (item) {
        let li = document.createElement('li');
        li.innerHTML = `
            Website: ${item.website}<br> 
            URL: ${item.weburl}<br>
            <button onclick="deleteData('${item.website}')">Delete</button>`;
        ul.appendChild(li);
    });
}

function deleteData(website) {
    if (confirm("Are you sure you want to delete this data?")) {
        let index = data.findIndex(item => item.website === website);
        if (index !== -1) {
            data.splice(index, 1);
            localStorage.setItem("data", JSON.stringify(data));
            renderData();
        }
    }

}

window.onload = renderData;