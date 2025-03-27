function input(){
    let input = prompt("Nhập vào một chuỗi mat khau bất kỳ: ");
    return input;
}

function isStrongPassword(input){
    let check = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.{8,})/;
    if(check.test(input)){
        return true;
    }else{
        return false;
    }
}

function main (){
    let inputStr = input();
    if(isStrongPassword(inputStr)){
        alert("Mật khẩu mạnh");
        console.log(inputStr);
    }else{
        console.log(inputStr);
        alert("Mật khẩu yếu");
    }
}
main();