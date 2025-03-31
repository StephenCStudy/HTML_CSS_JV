function check(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] == arr[0]) {
            return true;
        }
    }
    return false;
}

let arr = [3, 7, 8, 10, 11];
console.log(arr);
if (check(arr)) {
    console.log("mảng có dãy số cấp số cộng");
} else {
    console.log("mảng không có dãy số cấp số cộng");
}




let arr2 = [2, 4, 6, 8, 10];
console.log(arr2);
if (check(arr2)) {
    console.log("mảng có dãy số cấp số cộng");
} else {
    console.log("mảng không có dãy số cấp số cộng");
}