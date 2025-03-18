let year = prompt("nhap vao nam ban muon tinh: ");
let years = parseInt(year);
 if ( (years % 4 == 0 && years % 100 != 0) || years % 400 == 0) {
    alert("Đây là năm nhuận");
} else {
    alert("Đây không phải là năm nhuận");
}