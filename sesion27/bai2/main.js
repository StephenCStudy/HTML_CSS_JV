var studentList = []; 
let choice = 0;

do {
    choice = +prompt(`MENU
    1. Nhập danh sách sinh viên.    
    2. Hiển thị danh sách sinh viên.
    3. Tìm sinh viên theo tên.
    4. Xóa sinh viên khỏi danh sách.
    5. Thoát.
    `);

    switch (choice) {
        case 1:
            studentList = inputStudentList();
            break;
        case 2:
            if (studentList.length === 0) {
                alert("Danh sách sinh viên rỗng. Vui lòng nhập dữ liệu trước.");
            } else {
                showStudentList();  
            }
            break;
        case 3: {
            let name = prompt("Nhập tên sinh viên cần tìm: ");
            let students = findStudentByName(name);
            if (students.length === 0) {
                alert("Không tìm thấy sinh viên!");
            } else {
                alert("Tìm thấy sinh viên:\n" + students.join("\n"));
            }
            break;
        }
        case 4: {
            let name = prompt("Nhập tên sinh viên cần xóa: ");
            let deletedStudent = deleteStudentByName(name);
            if (!deletedStudent) {
                alert("Không tìm thấy sinh viên!");
            } else {
                alert("Đã xóa sinh viên: " + deletedStudent);
            }
            break;
        }
        case 5:
            alert("Thoát chương trình. Tạm biệt!");
            break;
        default:
            alert("Nhập sai, vui lòng nhập lại!");
            break;
    }
} while (choice !== 5);

function inputStudentList() {
    let newArray = [];
    let n = +prompt("Nhập số lượng sinh viên: ");
    while (isNaN(n) || n <= 0) {
        n = +prompt("Vui lòng nhập số lượng sinh viên hợp lệ: ");
    }
    for (let i = 0; i < n; i++) {
        let input = prompt(`Nhập tên sinh viên thứ ${i + 1}: `);
        newArray.push(input);
    }
    return newArray;
}

function showStudentList() {
    alert("Danh sách sinh viên:\n" + studentList.join("\n"));
}

function findStudentByName(name) {
    return studentList.filter(student => student.includes(name));
}

function deleteStudentByName(name) {
    const index = studentList.findIndex(student => student === name);
    if (index !== -1) {
        return studentList.splice(index, 1)[0];
    }
    return null;
}