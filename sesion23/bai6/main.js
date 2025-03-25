let arr = [ 0, null, undefined, '', NaN, false];
let n = +prompt("Nhập vào số n: ");
for (let i = 0; i < n; i++) {
     arr.push(prompt("Nhập vào phần tử thứ " + (i + 1) + ": "));
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (!arr[i]) {
        arr.splice(i, 1);
    }
}
console.log(arr); 