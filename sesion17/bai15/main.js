
let banKinh = parseFloat(prompt("Nhập bán kính của hình cầu (r):"));

const pi = Math.PI; 

let theTich = (4 / 3) * pi * Math.pow(banKinh, 3);

let dienTichBeMat = 4 * pi * Math.pow(banKinh, 2);

let chuViLonNhat = 2 * pi * banKinh;

console.log(`Bán kính hình cầu: ${banKinh.toFixed(2)}`);
console.log(`Thể tích hình cầu: ${theTich.toFixed(2)} `);
console.log(`Diện tích bề mặt hình cầu: ${dienTichBeMat.toFixed(2)} `);
console.log(`Chu vi lớn nhất của hình cầu: ${chuViLonNhat.toFixed(2)} `);
