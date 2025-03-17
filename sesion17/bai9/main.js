let a = prompt("nhap gia tri a");
let b = prompt("nhap gia tri b");
let c = prompt("nhap gia tri c");

let delta = b * b - 4 * a * c;
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);
document.writeln("x1 = " + x1 + "<br>");
document.writeln("x2 = " + x2 + "<br>");

