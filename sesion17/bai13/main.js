let soTienGui = parseFloat(prompt("Nhập số tiền gửi (VND):"));

let soThangGui = parseInt(prompt("Nhập số tháng gửi:"));

const laiSuatNam = 4.3 / 100;
const laiSuatThang = laiSuatNam / 12;

let tienLai = soTienGui * laiSuatThang * soThangGui;

console.log(`Số tiền gửi: ${soTienGui.toFixed(2)} VND`);
console.log(`Số tháng gửi: ${soThangGui}`);
console.log(`Lãi suất hàng tháng: ${(laiSuatThang * 100).toFixed(2)}%`);
console.log(`Số tiền lãi nhận được: ${tienLai.toFixed(2)} VND`);
