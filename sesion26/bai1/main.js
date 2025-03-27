let arr = [];
function getUserInput(arr){
    let newArray = [];
    let n = 10; 
    for(let i = 0; i < n; i++){
        newArray.push(+prompt("Nhập số thứ " + (i + 1)));
    }
    console.log(newArray);
    return newArray;
}

function findMunMoreThan10(arr){
    let checkarray = arr.filter(function(item){
        return item > 10;
    });
    console.log(`so luon hon 10 la: ${checkarray}`);   
}

function main (){
    arr = getUserInput(arr);
    findMunMoreThan10(arr);
}

main();