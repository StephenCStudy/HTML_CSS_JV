let users = [
    ["input@example.com"]
];

function getUserInput() {
    let gmail = prompt("Nhập Gmail: ");
    return gmail;
}

function checkGmail(gmail) {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return check.test(gmail);
}

function main() {
    let gmail = getUserInput();
    if (checkGmail(gmail)) {
        if (!users.includes(gmail)) { 
            users.push(gmail);
            alert("Đăng ký thành công!");
            console.log("Danh sách Gmail đã đăng ký: " + users.join(", "));
        } else {
            alert("Gmail đã tồn tại trong danh sách!");
        }
    } else {
        alert("Gmail không hợp lệ!");
    }
}

main();