let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide"; 
    } else {
        password.type = "password";
        togglePassword.textContent = "See"; 
    }
});