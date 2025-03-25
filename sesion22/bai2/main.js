let loto = [1,2,3,4,5];
let input = +prompt("moi nhap so ban muon: ");

for ( let i=0; i<loto.length-1; i++) {
    if (input === loto[i]) {
        console.log("Bingo");
        break;
    }else{
        console.log("Chúc bạn may mắn lần sau");
    }
}
