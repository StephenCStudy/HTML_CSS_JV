let arr = [9, 5, 6, 1, 3, 7, 2, 4, 8];
let soChan = arr.filter(x => x % 2 === 0).sort((a, b) => a - b);

let ketQua = arr.map((x) => {
    if (x % 2 === 0) {
        return soChan.shift();
    }
    return x;
});
console.log(`ban dau: ${arr}`);
console.log(`ketQua: ${ketQua}`);