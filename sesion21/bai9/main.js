let n = +prompt("nhap so nguyen bat ki: ");
let isPrime = true;

if (n < 2) {
    isPrime = false;
}

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${n} la so nguyen to`);
}
else {
    console.log(`${n} khong phai so nguyen to`);
}