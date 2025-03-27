function randomArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 20);
    }
    return arr;
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
    let arr = randomArray(15);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i]) % 2 != 0) {
            console.log(`số ${arr[i]} là số nguyên tố lẽ`);
        }
    }
}

main();