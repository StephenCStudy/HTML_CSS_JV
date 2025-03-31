function collectUserInput() {
    let arr = [];
    while (true) {
        let input = +prompt("Enter numbers from 0-9 (-1 to finish): ");
        if (input === -1) {
            break;
        }
        arr.push(input);
    }
    console.log(arr);
    return arr;
}

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}

let userInputArray = collectUserInput();
console.log("The missing number is: " + findMissingNumber(userInputArray));