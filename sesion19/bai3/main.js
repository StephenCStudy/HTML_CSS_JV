let choice = Number(prompt("Nhập lựa chọn của bạn(1.USD to VND, 2.VND to USD): "));
switch (choice) {
    case 1:{
        let USD = Number(prompt("Nhập số tiền :"));
        let VND = USD * 23000;
        alert("USD TO VND: "+ VND);
        break;}
    case 2:{
        let VND = Number(prompt("Nhập số tiền :"));
        let USD = VND / 23000;
        alert("VND to USD:" + USD);
        break;}
}