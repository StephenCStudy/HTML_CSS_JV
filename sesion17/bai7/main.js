let userMoney = prompt("nhap vao so tien ban muon rut: ");
let userMoneyNumber = Number(userMoney);

let b =userMoneyNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
console.log(b); 
