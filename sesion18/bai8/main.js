let a = Number(prompt("Nhập canh a: "));
let b = Number(prompt("Nhập canh b: "));
let c = Number(prompt("Nhập canh c: "));

if(a+b>c || a+c>b || b+c>a) {
    if(a == b && b == c) {
        console.log("Tam giac deu");
    } else if (a == b || b == c || a == c) {
        console.log("Tam giac can");
    } else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {  //pytago
        console.log("Tam giac vuong");
    } else {
        console.log("Tam giac thuong");
    }
} else {
    console.log("Khong phai tam giac");
}
