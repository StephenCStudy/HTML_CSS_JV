let n = +prompt("nhap so luong n phan tu: ");
let arr = [];
for (let i = 0; i < n; i++) {
    let input = prompt("nhap phan tu thu " + (i + 1) + ": ");
    let num = +input;
    if (num < 0) {
        console.log(num + " không phải là số Fibonacci");
    } else {
        let a = 0, b = 1, c = 0;
        while (c < num) {
            c = a + b;
            a = b;
            b = c;
        }
        if (c === num) {
            arr.push(num);
            console.log(num + " là số Fibonacci");
        } else {
            console.log(num + " không phải là số Fibonacci");
        }
    }
}