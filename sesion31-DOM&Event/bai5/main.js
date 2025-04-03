class Employee {
    constructor(stt, name, age, address) {
        this.stt = stt;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let employees = [
    new Employee(1, "John", 18, "New York"),
    new Employee(2, "Mike", 22, "Canada"),
    new Employee(3, "Linda", 19, "California"),
    new Employee(4, "Peter", 25, "London"),
    new Employee(5, "Tony", 17, "New York"),
];

const tableBody = document.getElementById("employeeTableBody");

employees.forEach(employee => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${employee.stt}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.address}</td>
    `;
    tableBody.appendChild(row);
});