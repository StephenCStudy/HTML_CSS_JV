let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 20));
    
}
console.log(array);
let index = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
       console.log("gia tri lon nhat la: " +array[i]);
       index = i;
       break;
    }
}
console.log("vi tri: " +index);