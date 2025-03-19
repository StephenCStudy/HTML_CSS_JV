let a = Number(prompt("Nhap so a: "));
let b = Number(prompt("Nhap so b: "));
let c = Number(prompt("Nhap so c: "));


let result = (a > b && a > c ) ? `${a} la lon nhat` : (b > c && b > a) ? `${b} la lon nhat` : ( c > a && c > b) ? `${c} la lon nhat` : "khong co so lon nhat";
console.log(result);
