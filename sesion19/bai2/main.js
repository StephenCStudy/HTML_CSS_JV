let userInput = prompt("moi ban nhap vao ky tu bat ki: ");
if(userInput > 'a' && userInput < 'z' || userInput > 'A' && userInput < 'Z'){
    alert("ky tu vua nhap vao la chu ");
} else{
    alert("ky tu vua nhap vao khong phai chu");
}