let email = document.getElementById("email");
let password = document.getElementById("pass");
let confirms = document.getElementById("confirm");

let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
    if (email.value === "" || password.value === "" || confirms.value === "") {
        alert("Please fill in all fields.");
    } else if (password.value !== confirms.value) {
        alert("Password and Confirm Password do not match.");
    } else {
        sessionStorage.setItem(Date.now(), email.value);
        sessionStorage.setItem(Date.now()+1, password.value);
        alert("Registration successful!");
    }
});

