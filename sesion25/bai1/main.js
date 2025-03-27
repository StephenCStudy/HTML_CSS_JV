function minArray(arr) {
    if (arr.length === 0) {
        return -1; 
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function userInput() {
    let n = parseInt(prompt("Nhập số phần tử của mảng: "));
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt("Nhập phần tử thứ " + i));
    }
    return arr;
}

function main() {
    let arr = userInput();
    let min = minArray(arr);
    if (min !== -1) {
        console.log("Phần tử nhỏ nhất trong mảng là: " + min);
    } else {
        console.log("Mảng rỗng");
    }
}

main();