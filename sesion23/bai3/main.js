let array = [];
let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));

if (n < 0) {
    console.log("Nhập sai");
} else if (n === 0) {
    console.log("mang rong");
} else {
    for (let i = 0; i < n; i++) {
        array[i] = +prompt("Nhập phần tử thứ " + (i + 1) + " của mảng: ");
    }
    console.log(array);
}

let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        count++;
    }
}
console.log("Số phần tử âm trong mảng là: " + count);