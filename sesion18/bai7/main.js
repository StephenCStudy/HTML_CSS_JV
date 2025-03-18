let a = Number(prompt("Nhập số a: "));
let b = Number(prompt("Nhập số b: "));

let calculator = prompt("Nhập phép tính bạn muốn (+, -, *, /): ");
switch (calculator) {
    case '+':
        console.log(`Tổng của a và b là: ` + (a + b));
        break;
    case '-':
        console.log(`Hiệu của a và b là: ` + (a - b));
        break;
    case '*':
        console.log(`Tích của a và b là: ` + (a * b));
        break;
    case '/':
        if (b !== 0) {
            console.log(`Thương của a và b là: ` + (a / b));
        } else {
            console.log("Không thể chia cho 0!");
        }
        break;
    default:
        console.log("Phép tính không hợp lệ!");
        break;
}
