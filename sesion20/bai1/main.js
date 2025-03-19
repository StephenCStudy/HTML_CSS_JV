let n = Number(prompt("nhap so N"));
let result = 0;


if (n < 0 || isNaN(n)) {
   console.log("so N khong hop le");
} else {
   for (let i = 1; i <= n; i++) {
      result = result + i;
   }
   console.log(result);
}

