let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10));
}

console.log(array)

let countLe =0;
let countChan =0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        countChan++;
    } else {
        countLe++;
    }
}
console.log(`${countChan} so chan`);
console.log(`${countLe} so le`);