let choice = 0;
let arr = [];
do {
    choice = +prompt(`Menu
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
        `)
    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số phần tử của mảng"));
            for (let i = 0; i < n; i++) {
                arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i + 1}`));
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            console.log("Các phần tử chẵn: ");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    console.log(arr[i]);
                }
            }
            console.log("Các phần tử lẻ: ");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 != 0) {
                    console.log(arr[i]);
                }
            }
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log(`Trung bình cộng của mảng là: ${sum / arr.length}`);
            break;
        case 5:
            let index = +prompt("Nhập vị trí cần xóa");
            arr.splice(index, 1);
            console.log(arr);
            break;
        case 6:
            let max = arr[0];
            let secondMax = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] > secondMax) {
                    secondMax = arr[i];
                }
            }
            console.log(`Phần tử lớn thứ hai trong mảng là: ${secondMax}`);
            break;
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            console.log("Nhập sai, vui lòng chọn lại");
            break;
    }

} while (choice != 7);
