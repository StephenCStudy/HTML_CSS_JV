let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10));
}
console.log(array);
array.sort();

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
        array.splice(i, 1);
    }
}

console.log(array);