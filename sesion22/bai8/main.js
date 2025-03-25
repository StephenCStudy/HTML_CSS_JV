let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10));
}
console.log(array);

let count = false;
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
        console.log("so xuat hien nhieu nhat trong mang la: " + array[i]);
        count = true;
        break;
    }
}

if (!count) {
    console.log("khong co so xuat hien nhieu nhat");
}