let userInput;
let countLe =0;
let countChan = 0;
for ( let i = 0; i < 5; i++ ) {
    userInput = +prompt( 'Nhập vào một số' );
    if(userInput % 2 ===0){
        countChan++;
    }else{
        countLe++;
    }
}
console.log("so luong so chan: " + countChan);
console.log("so luong so le: " + countLe);