function result(a, b) {
    return a + b;
}
function userInput() {
    let a = parseInt(prompt("Nhập số a: "));
    let b = parseInt(prompt("Nhập số b: "));
    if (isNaN(a) || isNaN(b)) {
        alert("Nhập sai dữ liệu");
        return userInput();
    }
    return result(a, b);
}

function main() {
    let result = userInput();
    console.log("Kết quả là: " + result);
}

main();