let employeeList = JSON.parse(sessionStorage.getItem("employeeList")) || [
    { id: 1, name: "Nguyen Van A", position: "Developer" },
    { id: 2, name: "Nguyen Thi B", position: "Designer" },
    { id: 3, name: "Nguyen Van C", position: "Project Manager" },
    { id: 4, name: "Nguyen Van D", position: "Developer" },
    { id: 5, name: "Nguyen Thi E", position: "Designer" },
    { id: 6, name: "Nguyen Van F", position: "Project Manager" },
    { id: 7, name: "Pham Van G", position: "Developer" },
    { id: 8, name: "Pham Thi F", position: "Designer" },
    { id: 9, name: "Nguyen Van H", position: "Project Manager" },
];

let currentPage = 1;
renderEmployee = function (list) {
    let html = "";
    list.forEach(element => {
        html += `<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.position}</td>
                </tr>`
    });
    document.getElementById("table-body").innerHTML = html;
};






divideArray = function () {
    let dividedArr = [];
    for (let i = 0; i < employeeList.length; i += 3) {
        dividedArr.push(employeeList.slice(i, i + 3));
    }
    return dividedArr;
};

addEmp = function () {
    let _name = document.getElementById("name").value;
    let _pos = document.getElementById("pos").value;

    employeeList.push({ id: employeeList.length + 1, name: _name, position: _pos });
    tempList = divideArray();
    renderEmployee(tempList[currentPage - 1]);
    paginationPage();
    sessionStorage.setItem("employeeList", JSON.stringify(employeeList));
};


let tempList = divideArray();
renderEmployee(tempList[currentPage - 1]);











function paginationPage() {
    let pageHtml = "";
    pageHtml += `<li class="page-item" onclick="prevPage()">
                    <a class="page-link" id="prev-page">Previous</a>
                 </li>`;
    for (let i = 1; i <= tempList.length; i++) {
        pageHtml += `<li class="page-item"><a class="page-link page-nav" href="#" data-page= "${i}"onclick="goToPage(${i})">${i}</a></li>`;
    }
    pageHtml += `<li class="page-item" onclick="nextPage()">
                    <a class="page-link" id = "next-page">Next</a>
                 </li>`;
    document.getElementById("pagination").innerHTML = pageHtml;
};
paginationPage();

function goToPage(page) {
    currentPage = page;

    let pageLinks = document.querySelectorAll(".page-item");
    pageLinks.forEach(link => link.classList.remove("active"));

    let currentPageLink = document.querySelector(`.page-item:nth-child(${page + 1})`);
    if (currentPageLink) {
        currentPageLink.classList.add("active");
    }
    isActivePage(currentPage);
    renderEmployee(tempList[currentPage - 1]);
};

function nextPage() {
    isActivePage(currentPage + 1);
    if (currentPage < tempList.length) {
        currentPage++;
        renderEmployee(tempList[currentPage - 1]);
    }
};

function prevPage() {
    isActivePage(currentPage - 1);

    if (currentPage > 1) {
        currentPage--;
        renderEmployee(tempList[currentPage - 1]);
    }
};


function isActivePage(page) {
    if (page === 1) {
        document.getElementById("prev-page").classList.add("disabled");
    } else {
        document.getElementById("prev-page").classList.remove("disabled");
    }
    if (page === tempList.length) {
        document.getElementById("next-page").classList.add("disabled");
    } else {
        document.getElementById("next-page").classList.remove("disabled");
    }
}
isActivePage(currentPage);
