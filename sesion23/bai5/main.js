let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
let count = 0;
if (n === 0) {
    alert("Mảng rỗng");
} else if (n < 0) {
    alert("Nhập sai");
} else {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt(`Nhập phần tử thứ ${i + 1}: `));
        if (!isNaN(arr[i])) {
            count++;
        } else{
            alert("Nhập sai");
        }
    }
}
console.log("cac so co trong mang: "+count);



