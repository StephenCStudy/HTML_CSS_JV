let em = document.getElementById("em");
let role = document.getElementById("role");
let btn = document.getElementById("btn");
let tbody = document.getElementById("listEmployee");

// Kiểm tra dữ liệu trong localStorage
let storedListEmp = localStorage.getItem("listEmp");
let listEmp = storedListEmp ? JSON.parse(storedListEmp) : [
    { name: "Nguyễn Văn A", role: "Developer" },
    { name: "Trần Thị B", role: "Designer" },
    { name: "Phạm Văn C", role: "Project Manager" }
];

renderListEmp();

btn.addEventListener("click", function () {
    let email = em.value;
    let empRole = role.value; 
    if (email === "" || empRole === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let newEmployee = { name: email, role: empRole };
    listEmp.push(newEmployee); 
    localStorage.setItem("listEmp", JSON.stringify(listEmp)); 
    alert("Đã thêm thành công!");
    em.value = "";
    role.value = "";
    renderListEmp();
});

function renderListEmp() {
    tbody.innerHTML = ""; 
    listEmp.forEach((employee, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.role}</td>
        `;
        tbody.appendChild(tr);
    });
}