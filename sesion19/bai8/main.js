let month = Number(prompt("Nhập tháng: "));

if(month == 1 || month == 2 || month == 3) {
    console.log("mua xuan");
} else if ( month == 4 || month == 5 || month == 6) {
    console.log("mua he");
} else if ( month == 7 || month == 8 || month == 9) {
    console.log("mua thu");
} else if ( month == 10 || month == 11 || month == 12) {
    console.log("mua dong");
} else{
    console.log("thang khong hop le");
}