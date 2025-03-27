function getUserInput() {
    let n = +prompt("nhap vao so nguyen duong bat ki :");
    return n;
}

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function main() {
    let num = getUserInput();
    if (isPrime(num)) {
        console.log(`${num} la so nguyen to`);
    } else {
        console.log(`${num} khong phai la so nguyen to`);
    }
}