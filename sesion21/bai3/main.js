let password = "hello123"
let userInput;

while (true) {
    userInput = prompt("Enter your password:");
    if (userInput === password) {
        alert("Welcome");
        break;
    }
    else {
        alert("Wrong password");
    }
}

