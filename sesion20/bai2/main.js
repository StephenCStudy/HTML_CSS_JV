let n = Number(prompt("nhap so N"));


if (n < 0 || isNaN(n)) {
    alert("so N khong hop le");
} else {
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            console.log(i + " la so chia het cho 5");
        }
    }
}
