let n = Number(prompt("nhap so N"));

if (n < 0 || isNaN(n)) {
  alert("so N khong hop le");
} else {
  let soDoiXung = true;
  let chuSoDau = Math.floor(n / Math.pow(10, String(n).length - 1)); // lay chu so dau cua so n
  let chuSoCuoi = n % 10; // lay chu so cuoi cua so n

  for (let i = 0; i < Math.floor(String(n).length / 2); i++) { // so sanh 2 so dau-cuoi
    if (chuSoDau !== chuSoCuoi) {
      soDoiXung = false;
      break;
    }
    chuSoDau = Math.floor((n / Math.pow(10, String(n).length - 2 - i)) % 10); // cap nhat so dau tiep theo
    chuSoCuoi = Math.floor((n / Math.pow(10, i)) % 10); // cap nhat so cuoi tiep theo
  }

  if (soDoiXung) {
    alert("so N la so doi xung");
  } else {
    alert("so N khong la so doi xung");
  }
}