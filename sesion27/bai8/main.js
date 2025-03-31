function NumberToDigits(num) {
    let digits = num.toString();
    let sortedDigits = digits.split('').sort((a, b) => b - a);
    return parseInt(sortedDigits.join(''), 10);
}

let input = +prompt("nhap 1 day so nguyen: ");
let result = NumberToDigits(input);
console.log("Số lớn nhất có thể tạo được:", result);