let banKinh = parseFloat(prompt("Nhập bán kính đáy (r):"));

let chieuCao = parseFloat(prompt("Nhập chiều cao của hình trụ (h):"));

const pi = Math.PI; 

let dienTichXungQuanh = 2 * pi * banKinh * chieuCao;
console.log(`Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)} `);

let dienTichToanPhan = dienTichXungQuanh + 2 * pi * banKinh ** 2;
console.log(`Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)} `);

let theTich = pi * banKinh ** 2 * chieuCao;
console.log(`Thể tích hình trụ: ${theTich.toFixed(2)} `);

let chuViDay = 2 * pi * banKinh;
console.log(`Chu vi đáy: ${chuViDay.toFixed(2)} `);
