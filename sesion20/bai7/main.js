let n = prompt("Nhập số lượng số Fibonacci muốn hiển thị:");

if (isNaN(n) || n <= 0) {
    console.log("Không hợp lệ");
} else {
    let a = 1;
    let b = 1;

    console.log(a + " " + b);

    for (let i = 2; i < n; i++) {
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}