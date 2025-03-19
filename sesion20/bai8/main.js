let n = parseInt(prompt("Nhập số lượng số nguyên tố muốn hiển thị:"));
let soHienTai = 2;
let dem = 0;

while (dem < n) {
  let laSoNguyenTo = true;
  for (let i = 2; i <= Math.sqrt(soHienTai); i++) {
    if (soHienTai % i === 0) {
      laSoNguyenTo = false;
      break;
    }
  }
  if (laSoNguyenTo) {
    console.log(soHienTai);
    dem++;
  }
  soHienTai++;
}