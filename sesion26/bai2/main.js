function input() {
    let newstr = [];
    for (let i = 0; i < 5; i++) {
        newstr[i] = prompt("Nhập chuỗi thứ " + (i + 1) + ": ");
    }
    return newstr;
}

function stringLenThan5(str) {
    let result = str.find(s => s.length > 5);
    if (result) {
        console.log(`chuỗi có độ dài lớnlớn hơn 5 là: ${result}`);
    } else {
        console.log("không có chuỗi.");
    }
}

function main() {
    let str = input();
    stringLenThan5(str);
}

main();