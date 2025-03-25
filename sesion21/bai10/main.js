let n = +prompt("nhap n so nguyen bat ki: ");

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  const sqrtN = Math.sqrt(i);
  for (let j = 2; j <= sqrtN; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${i} là số nguyên tố`);
  } else {
    console.log(`${i} không là số nguyên tố`);
  }
}