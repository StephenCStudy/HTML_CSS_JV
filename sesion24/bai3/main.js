let choice = 0;
let arr = [];
do {
    choice = +prompt(`Menu
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình   
        `)
    switch (choice) {
        case 1:
            let n = +prompt('Nhập số phần tử của mảng');
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt(`Nhập phần tử thứ ${i}`);
            }
            break;
        case 2:
            if (arr.length == 0) {
                console.log('Mảng rỗng');
                break;
            } else {
                console.log('Mảng là');
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                }
            }

            break;
        case 3:
            let max = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            console.log(max);
            break;
        case 4:
            let sum = 0;
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    count++;
                }
            }
            console.log(`Tổng là ${sum}, trung bình cộng là ${sum / count}`);
            break;
        case 5:
            for (let i = 0; i < arr.length / 2; i++) {
                let temp = arr[i];
                arr[i] = arr[arr.length - 1 - i];
                arr[arr.length - 1 - i] = temp;
            }
            console.log(arr);
            break;
        case 6:
            let flag = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] != arr[arr.length - 1 - i]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                console.log('Đối xứng');
            } else {
                console.log('Không đối xứng');
            }
            break;
        case 7:
            console.log('Kết thúc chương trình');
            break;
        default:
            console.log('Nhập sai');
            break
    }
} while (choice != 7);