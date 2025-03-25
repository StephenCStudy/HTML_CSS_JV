let n =+prompt("nhap so luong n phan tu: ");
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(prompt("nhap phan tu thu " + (i + 1) + ": "));
}
let firstMaxNum = 0;
let secoundMaxNum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMaxNum) {
        secoundMaxNum = firstMaxNum;
        firstMaxNum = arr[i];
    } else if (arr[i] > secoundMaxNum) {
        secoundMaxNum = arr[i];
    }
}
console.log("Số lớn thứ hai là: " + secoundMaxNum);