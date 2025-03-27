function randomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}


function main() {
    let arr = randomArray();
    arr.sort((a, b) => a - b);
    let maxNum = arr[arr.length - 1];
    let positonMaxNum = arr.indexOf(maxNum);
    

    console.log("Mảng: ", arr);
    console.log("Số lớn nhất: ", maxNum);
    console.log("Vị trí số lớn nhất: ", positonMaxNum);
}

main();