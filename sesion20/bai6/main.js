let n = +prompt("nhap vao so n:");

if (n < 2) {
    console.log("khong phai so nguyen to");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n + " la so nguyen to");
    } else {
        console.log(n + " khong phai so nguyen to");
    }
}