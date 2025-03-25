let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 20));
}
console.log("truoc khi sap xep: "+ array);



console.log("sau khi sap xep: "+ array.sort((a, b) => a - b)); // Sắp xếp mảng theo thứ tự tăng dần