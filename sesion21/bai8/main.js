
for (let num = 100; num <= 999; num++) {
    let hundredsDigit = Math.floor(num / 100); // Lấy chữ số hàng trăm
    let tensDigit = Math.floor((num % 100) / 10); // Lấy chữ số hàng chục
    let onesDigit = num % 10; // Lấy chữ số hàng đơn vị
    if (Math.pow(hundredsDigit, 3) + Math.pow(tensDigit, 3) + Math.pow(onesDigit, 3) === num) {
       console.log(num);
    }
}