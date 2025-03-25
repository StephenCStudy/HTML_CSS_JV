let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10));
}

console.log(array);
let count =0;
let input =+prompt("nhap so muon kiem tra: ");

for (let i = 0; i < array.length; i++) {
    if (input === array[i]) {
        count++;
    } 
}
if (count!==0){
    console.log("so " + input + " co trong mang");
}
