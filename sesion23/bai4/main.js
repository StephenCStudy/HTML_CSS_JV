let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
for (let i = 0; i < n; i++) {
    arr.push(+prompt(`Nhập phần tử thứ ${i + 1}: `));
    if (!isNaN(arr[i])) {
        console.log(arr[i]);
    }
}

