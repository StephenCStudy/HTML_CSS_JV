const number = parseInt(prompt("Nhập một số nguyên: "));
console.log(`Ước của số ${number} là:`);
for (let i = 1; i <= Math.abs(number); i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
