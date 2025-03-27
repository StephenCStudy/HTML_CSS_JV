let arr = [];
for (let i = 0; i < 10; i++) {
    let input = prompt("Nhập vào số");
    let num = parseInt(input);
    if (isNaN(num)) {
        console.error("sai", input);
        i--; 
    } else {
        arr.push(num);
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr[i] = Math.pow(arr[i], 2);
        console.log(arr[i]);
    } else {
        arr[i] = null;
    }
}



