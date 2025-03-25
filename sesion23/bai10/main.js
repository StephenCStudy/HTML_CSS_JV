let = choice = 0;
let arr = [];
do {
    choice = +prompt(`Menu \n 
1. Nhập số phần tử cần nhập và giá trị các phần tử 
2. In ra giá trị các phần tử đang quản lý 
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 
5. In ra các số nguyên tố trong mảng và tính tổng 
6. Nhập một số và đếm số lần xuất hiện trong mảng 
7. Thêm một phần tử vào vị trí chỉ định 
8. Xóa một phần tử theo giá trị 
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần 
0. Thoát `

    );
    switch (choice) {
        case 1:
            let n = +prompt("Nhập số phần tử cần nhập");
            for (let i = 0; i < n; i++) {
                arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}`);
            }
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Chưa có phần tử nào");
                break;
            } else {
                console.log("Các phần tử đang quản lý: ");
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                }
            }
            break;
        case 3:
            let even = [];
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    even.push(arr[i]);
                    sum += arr[i];
                }
            }
            console.log(`Các số chẵn: ${even}`);
            console.log(`Tổng các số chẵn: ${sum}`);
            even.sort((a, b) => b - a);
            console.log(`Sắp xếp giảm dần: ${even}`);
            break;
        case 4:
            let max = arr[0];
            let min = arr[0];
            let posMax = 0;
            let posMin = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    posMax = i;
                }
                if (arr[i] < min) {
                    min = arr[i];
                    posMin = i;
                }
            }
            console.log(`Số lớn nhất: ${max}, ở vị trí ${posMax}`);
            console.log(`Số nhỏ nhất: ${min}, ở vị trí ${posMin}`);
            break;
        case 5:
            let sumPrime = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] < 2) {
                    continue;
                }
                let isPrime = true;
                for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                    if (arr[i] % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    console.log(arr[i]);
                    sumPrime += arr[i];
                }
            }
            console.log(`Tổng các số nguyên tố: ${sumPrime}`);
            break;
        case 6: {
            let x = +prompt("Nhập số cần kiểm tra");
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === x) {
                    count++;
                }
            }
            console.log(`Số ${x} xuất hiện ${count} lần`);
            break;
        }
        case 7:
            let y = +prompt("Nhập số cần thêm");
            let z = +prompt("Nhập vị trí cần thêm");
            arr.splice(z, 0, y);
            console.log(arr);
            break;
        case 8:
            let w = +prompt("Nhập số cần xóa");
            let index = arr.indexOf(w);
            arr.splice(index, 1);
            console.log(arr);
            break;
        case 9: {
            let order = prompt("Sắp xếp tăng dần (1) hoặc giảm dần (2)");
            if (order === "1") {
                arr.sort((a, b) => a - b);
            } else if (order === "2") {
                arr.sort((a, b) => b - a);
            } else {
                alert("Lựa chọn không hợp lệ");
            }
            console.log(arr);
            break;
        }
        case 0:
            alert("Thoát");
            break;
        default:
            alert("Nhập sai");
    }
} while (choice !== 0)

