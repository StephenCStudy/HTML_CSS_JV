let xp = prompt("Nhap nam kinh nghiem cua nhan vien(year): ");
let emplXp = Number(xp);
if (  emplXp < 1 && emplXp >=0){
    alert("Moi vao nghe");
} else if (emplXp >= 1 && emplXp <= 3){
    alert("Nhan vien co kinh nghiem");
} else if ( emplXp >=4 && emplXp <= 6){
    alert("Chuyen vien");
} else if (emplXp >= 6){
    alert("Quan ly");
} else {
    alert("i don't know you");
}