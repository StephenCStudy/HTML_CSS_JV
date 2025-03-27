function getUserInput() {
    let input = prompt("nhap vao chuoi bat ky: ");
    return input;
}

function isPalindrome(input) {
    let input1 = input.toLowerCase();
    let input2 = input1.split('').reverse().join('');
    if (input1 === input2) {
        return true;
    }
    else {
        return false;
    }
}

function main() {
    let input = getUserInput();
    if (isPalindrome(input)) {
        console.log("Chuoi vua nhap la chuoi doi xung");
    }
    else {
        console.log("Chuoi vua nhap khong phai la chuoi doi xung");
    }
}

main();