let userInput = Number(prompt("nhap vao so ban muon chia het cho 3 va 5: "));

if (userInput % 3 == 0 && userInput % 5 == 0) {
    console.log("so ban vua nhap la so chia het cho 3 va 5");
} else{
    console.log("so "+userInput + " " +" ban vua nhap khong la so chia het cho 3 va 5");
}