function randomArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 20));
    }
    return arr;
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function Numbers(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return { even, odd };
}

function main() {
    let numbers = randomArray(30); 
    console.log(numbers);
    

    let { even, odd } = Numbers(numbers);

    console.log("Mảng các số chẵn: " + even);
    console.log("Mảng các số lẻ: " + odd);
    console.log("Tổng số chẵn: " + sumArray(even));
    console.log("Tổng số lẻ: " + sumArray(odd));
}

main();