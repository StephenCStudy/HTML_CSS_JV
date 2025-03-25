let arr = [];
let choice;
do {
    alert("Menu \n1. Nhap mang \n2. hien thi mang \n3. them phan tu vao mang \n4. sua phan tu trong mang \n5. xoa phan tu trong mang \n0. thoat");
    // alert("Menu");
    // alert("1. Nhap mang");
    // alert("2. hien thi mang");
    // alert("3. them phan tu vao mang");
    // alert("4. sua phan tu trong mang");
    // alert("5. xoa phan tu trong mang");
    // alert("0. thoat");
    choice = +prompt("Nhap lua chon cua ban");
    switch (choice) {
        case 1:
            let n = +prompt("Nhap so phan tu cua mang");
            for (let i = 0; i < n; i++) {
                arr.push(Math.floor(Math.random() * 10));
            }
            console.log(arr);
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let value = +prompt("Nhap gia tri can them");
            let index = +prompt("Nhap vi tri can them");
            arr.splice(index, 0, value);
            console.log(arr);
            break;
        case 4:
            let newValue = +prompt("Nhap gia tri moi");
            let indexValue = +prompt("Nhap vi tri can sua");
            arr[indexValue] = newValue;
            break;
        case 5:
            let indexDelete = +prompt("Nhap vi tri can xoa");
            arr.splice(indexDelete, 1);
            break;
        case 0:
            alert("Ket thuc chuong trinh");
            break;
        default:
            alert("Lua chon khong hop le");
            break;
    }
} while (choice != 0);