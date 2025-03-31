class Employee {
    constructor(id, name, positon, salary) {
        this.id = id;
        this.name = name;
        this.positon = positon;
        this.salary = salary;
    }
}
let choice = 0;
let employees = [];
let employee = new Employee(1, "John", "Developer", 5000);
do {
    choice = +prompt(`MENU
        1. Thêm nhân viên mới.
        2. Xóa nhân viên theo id
        3. Cập nhật mức lương của nhân viên theo id
        4. Tìm kiếm nhân viên theo tên.
        5. thoat
    `);
    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            sreachEmployee();
            break;
        case 5:
            alert("Cảm ơn bạn đã sử dụng chương trình. Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hop lệ. Vui lòng nhập lại.");
            break;
    }
} while (choice != 5)

function addEmployee() {
    let id = +prompt("Nhập id:");
    let name = prompt("Nhập tên:");
    let position = prompt("Nhập chức vụ:");
    let salary = +prompt("Nhập mức lương:");
    let employee = new Employee(id, name, position, salary);
    employees.push(employee);
    alert("Thêm nhân viên thành công!");
    showEmployees();
}
function sreachEmployee() {
    let name = prompt("Nhập name:");
    let foundEmployee = employees.find(e => e.name === name);
    if (foundEmployee) {
        alert(`Thông tin nhân viên với id ${id}:\nTên: ${foundEmployee.name}\nChức vụ: ${foundEmployee.position}\nMức lương: ${foundEmployee.salary}`);
    } else {
        alert("Không tìm thấy nhân viên nào với id này.");
    }
}
function deleteEmployee() {
    let id = +prompt("Nhập id:");
    let foundEmployee = employees.find(e => e.id === id);
    if (foundEmployee) {
        let index = employees.indexOf(foundEmployee);
        let confirm = +prompt("Are you sure you want to delete. choices : 1. yes 2. no");
        if (confirm === 1) {
            employees.splice(index, 1);
            alert("Xóa nhân viên thành công!");
            showEmployees();
        }
    } else {
        alert("Không tìm thấy nhân viên nào với id này.");
    }
}
function updateEmployees(){
    let id = +prompt("Nhập id:");
    let foundEmployee = employees.find(e => e.id === id);
    if (foundEmployee) {
        let salary = +prompt("Nhập mức lương mới:");
        foundEmployee.salary = salary;
        alert("Cập nhật thành công!");
        showEmployees();
    } else {
        alert("Không tìm thấy nhân viên nào với id này.");
    }
}
function showEmployees(){
    for (let i = 0; i < employees.length; i++) {
        alert(`Thông tin nhân viên thứ ${i + 1}:\nID: ${employees[i].id}\nTên: ${employees[i].name}\nChức vụ: ${employees[i].position}\nMức lương: ${employees[i].salary}`);
    }
}