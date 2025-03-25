
let arr = [];
let choice =0;
while (choice !== 8) {
    choice = +prompt(`
    =================== MENU =================
        1. Nhập số phần tử cần nhập và giá trị các phần tử
        2. In ra giá trị các phần tử đang quản lý
        3. In ra giá trị các phần tử chẵn và tính tổng
        4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
        5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
        6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
        7. Thêm một phần từ vào vị trí chỉ định
        8. Thoát
        =========================================
        Lựa chọn của bạn: 
    `);
    switch (choice) {
        case 1:{
            let n = +prompt("Nhập số phần tử: ");
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}: `);
                
            }
            break;
        }
        case 2:
            console.log(`Các phần tử trong mảng: ${arr}`);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    console.log(`Số chẵn: ${arr[i]}`);
                    sum += arr[i];
                }
            }
            console.log(`Tổng các số chẵn: ${sum}`);
            break;
        case 4:
            let max = arr[0];
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            console.log(`Số lớn nhất: ${max}`);
            console.log(`Số nhỏ nhất: ${min}`);
            break;
        case 5:
            let sumPrime = 0;
            for (let i = 0; i < arr.length; i++) {
                let isPrime = true;
                for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                    if (arr[i] % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime && arr[i] > 1) {
                    console.log(`Số nguyên tố: ${arr[i]}`);
                    sumPrime += arr[i];
                }
            }
            console.log(`Tổng các số nguyên tố: ${sumPrime}`);
            break;
        case 6:
            let num = +prompt("Nhập số cần tìm: ");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num) {
                    count++;
                }
            }
            console.log(`Số ${num} xuất hiện ${count} lần`);
            break;
        case 7:
            let numIndex = +prompt("Nhập số cần tìm: ");
            let index = -1;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === numIndex) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                console.log(`Không tìm thấy số ${numIndex} trong mảng`);
            } else {
                let value = +prompt("Nhập giá trị cần thêm: ");
                arr.splice(index + 1, 0, value);
                console.log(`Mảng sau khi thêm giá trị: ${arr}`);
            }
            break;
            case 8:
            console.log("Thoát");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}