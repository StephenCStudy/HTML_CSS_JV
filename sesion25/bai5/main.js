function randomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * -10 + 7);    
    }
    return arr;
}

function countNum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}

function main() {
   let arr = randomArray();
   console.log(arr);
   countNum(arr);
   if (countNum(arr) === 0) {
       console.log("Không có số dương nào trong mảng");
   }
   else {
       console.log("Số lượng số dương trong mảng là: " + countNum(arr));
   } 
}


main();