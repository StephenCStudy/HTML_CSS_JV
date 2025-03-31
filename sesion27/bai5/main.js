function cutArray(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let n = +prompt("nhap kich thuoc muon cat: ");
let newArrays = cutArray(arr, n);
console.log(newArrays); 
