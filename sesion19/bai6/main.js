let a = Number(prompt("nhap so a: "));
let b = Number(prompt("nhap so b: "));
let c = Number(prompt("nhap so c: "));

let delta = b * b - 4 * a * c;
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);
let x = -b / (2 * a);
if(delta < 0) {
    alert("Phuong trinh vo nghiem");
} else if(delta == 0) {
    alert("Phuong trinh co nghiem kep: x=" + x);
} else {
    alert("Phuong trinh co 2 nghiem phan biet:" +" x1=" + x1 + " x2=" + x2);
}