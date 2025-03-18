let T = prompt("nhap diem mon Toan: ");
let V = prompt("nhap diem mon Van: ");
let A = prompt("nhap diem mon Anh: ");

let avg = (parseFloat(T) + parseFloat(V) + parseFloat(A)) / 3;

if (avg >= 8) {
    alert("Gioi")
}else if( avg >= 6.5 && avg <= 7.9 ){
    alert("Kha")
} else if( avg >=5 && avg <= 6.4 ){
    alert("Trung Binh");
} else{
    alert("Yeu");
}