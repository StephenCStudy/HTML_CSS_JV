
function randomArray() {
    let arr = [];
    for (let i = 0; i < 30; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}


function sreachNum(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(`${arr[i]} la so chan`);
        }
    }
}

function main() {
   let arr = randomArray();
   sreachNum(arr); 
}


main();