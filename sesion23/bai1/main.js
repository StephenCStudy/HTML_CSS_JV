let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 20));
    
}
console.log(array);

 for (let i= 0; i < array.length ; i++) {
    if (array[i] >= 10 ) {
        console.log(array[i]);
    }
}