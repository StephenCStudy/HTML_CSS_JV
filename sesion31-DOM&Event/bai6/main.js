let username = 'huanrose@gmail.com';
let password = 123456;

let submit = document.getElementById('btn');

submit.addEventListener('click', function() {
    let usernameInput = document.getElementById('exampleInputEmail1');
    let passwordInput = document.getElementById('exampleInputPassword1');
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;
    if (usernameValue == username && passwordValue == password) {
        alert('Đăng nhập thành công');
    } else {
        alert('Đăng nhập thất bại');
    }
})