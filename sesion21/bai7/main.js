let money = +prompt("nhap so tien: ");
let n = +prompt("nhap % lai suat: ");
let month = +prompt("nhap so thang gui: ");
let totalMonth = money *(n/100);

let total = money * Math.pow((1 + n / 100), month);

console.log(`Tien lai = ${totalMonth}`);
console.log(`tong so tien nhan duoc = ${total}`);
