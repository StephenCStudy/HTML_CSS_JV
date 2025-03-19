let str = prompt("nhap chuoi ban muon: ");
let sreach = prompt("nhap chu cai muon tim kiem trong chuoi: ");


if (str.includes(sreach)) {
    console.log(`chu cai ${sreach} co trong chuoi ${str}`);
} else {
    console.log(`chu cai ${sreach} khong co trong chuoi ${str}`);
}