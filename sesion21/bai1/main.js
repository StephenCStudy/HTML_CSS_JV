let userInput;
let sum =0;
for ( let i = 0; i < 5; i++ ) {
    userInput = +prompt( 'Nhập vào một số' );
    if(userInput % 2 !==0){
        sum += userInput;
    }
}
console.log('Tổng của các số lẻ là: ' + sum );

