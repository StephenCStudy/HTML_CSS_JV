let unserInput = prompt("nhap chuoi ban muon: ");
let b = unserInput.includes(" ");

if(b){
    alert("chuoi ban co khoang trang");
} else{
    alert("chuoi ban khong khoang trang");
}