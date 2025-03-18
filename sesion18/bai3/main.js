let userName = prompt("Nhập tên của bạn (ADMIN):");

if (userName === "ADMIN") {
    let password = prompt("Nhập mật khẩu của bạn (THEMASTER):");
    if (password === "THEMASTER") {
        alert("Welcome");
    } else if (password === "") {   //"" === null
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (userName === "") {
    alert("Cancelled");
} else {
    alert("I don’t know you");
}
