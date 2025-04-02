class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

let danhSachEmail = ["example@domain.com", "user@domain.vn"];
let newUser = [];
let choice = 0;

do {
    choice = +prompt(`MENU
    1. Đăng ký người dùng mới
    2. Đăng nhập người dùng
    3. Thoát
    Chọn: `);

    switch (choice) {
        case 1: {
            let user = userInput();
            if (user) {
                newUser.push(user);
                danhSachEmail.push(user.email);
                alert("Đăng ký thành công!");
            }
            break;
        }
        case 2:
            login();
            break;
        case 3:
            alert("Thoát chương trình thành công!");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 3.");
            break;
    }
} while (choice !== 3);

function userInput() {
    let name = prompt("Nhập tên người dùng:").trim();
    if (!name) {
        alert("Tên không được để trống!");
        return null;
    }

    let email = prompt("Nhập email:").trim();
    if (!email) {
        alert("Email không được để trống!");
        return null;
    }
    if (!checkEmail(email)) {
        alert("Email không hợp lệ! Chỉ chấp nhận định dạng ...@gmail.com ");
        return null;
    }
    if (isEmail(email)) {
        alert("Email đã tồn tại! Vui lòng sử dụng email khác.");
        return null;
    }

    let password = prompt("Nhập mật khẩu:").trim();
    if (!password) {
        alert("Mật khẩu không được để trống!");
        return null;
    }
    let passwordCheck = checkPassword(password);
    if (passwordCheck !== true) {
        alert(passwordCheck); 
        return null;
    }

    let confirmPassword = prompt("Xác nhận mật khẩu:").trim();
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return null;
    }

    return new User(name, email, password);
}

function login() {
    let email = prompt("Nhập email:").trim();
    let password = prompt("Nhập mật khẩu:").trim();
    let userLogin = newUser.find(user => user.email === email && user.password === password);
    if (userLogin) {
        alert(`Đăng nhập thành công! Xin chào ${userLogin.name}`);
    } else {
        alert("Đăng nhập thất bại! Email hoặc mật khẩu không đúng.");
    }
}

function checkEmail(email) {
    const emailMau = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    return emailMau.test(email);
}

function checkPassword(matKhau) {
    const coKyTuDacBiet = /[!@#$%^&*(),.?":{}|<>]/.test(matKhau);
    const coKyTuVietHoa = /[A-Z]/.test(matKhau);
    const coKyTuThuong = /[a-z]/.test(matKhau);
    const coSo = /[0-9]/.test(matKhau);
    const doDaiToiThieu = matKhau.length >= 6;

    if (!doDaiToiThieu) return "Mật khẩu phải dài ít nhất 6 ký tự!";
    if (!coKyTuDacBiet) return "Mật khẩu cần ít nhất 1 ký tự đặc biệt!";
    if (!coKyTuVietHoa) return "Mật khẩu cần ít nhất 1 chữ cái in hoa!";
    if (!coKyTuThuong) return "Mật khẩu cần ít nhất 1 chữ cái thường!";
    if (!coSo) return "Mật khẩu cần ít nhất 1 số!";

    return true;
}

function isEmail(email) {
    return danhSachEmail.includes(email);
}