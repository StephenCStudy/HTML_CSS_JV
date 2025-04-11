function initSampleUser() {
    const sampleUser = {
        email: "test@example.com",
        password: "password123"
    };
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([sampleUser]));
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function handleLogin() {
    const loginBtn = document.getElementById('login-btn');

    loginBtn.addEventListener('click', function() {
        const emailInput = document.getElementById('gmail').value.trim();
        const passwordInput = document.getElementById('password').value;

        if (!emailInput) {
            alert('Email cannot be empty!');
            return;
        }

        if (!isValidEmail(emailInput)) {
            alert('Please enter a valid email address!');
            return;
        }

        if (!passwordInput) {
            alert('Password cannot be empty!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => 
            user.email === emailInput && user.password === passwordInput
        );

        if (user) {
            alert('Login successful!');
            location.href = "../bai2/index.html";   
        } else {
            alert('Invalid email or password!');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initSampleUser();
    handleLogin();
});

let sign = document.getElementById('signUp');

sign.addEventListener('click', function(){
    location.href = "../bai1/index.html";
});