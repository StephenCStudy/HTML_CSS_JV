let choice = 0;
let arr = [];
do {
    choice = +prompt(`Menu 
        1. Nhập mảng
        2. Hiển thị mảng
        3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4. Tính tổng các phần tử trong mảng
        5. Tìm số lần xuất hiện của một phần tử trong mảng
        6. Sắp xếp mảng tăng dần
        7. Thoát chương trình
        `)
    switch (choice) {
        case 1: {
            let n = +prompt("Nhập số phần tử của mảng: ");
            for (let i = 0; i < n; i++) {
                arr.push(+prompt(`Nhập phần tử thứ ${i + 1}: `));
            }
            alert(`Mảng vừa nhập là: ${arr}`);
            break;
        }
        case 2:
            if (arr.length === 0) {
                alert("Mảng chưa được tạo");
                break;
            } else {
                alert(`Mảng vừa nhập là: ${arr}`);
                break;
            }
        case 3:
            let max = Math.max(...arr);
            let min = Math.min(...arr);
            alert(`Phần tử lớn nhất trong mảng là: ${max} và phần tử nhỏ nhất trong mảng là: ${min}`);
            break;
        case 4: {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            alert(`Tổng các phần tử trong mảng là: ${sum}`);
            break;
        }
        case 5: {
            let count = 0;
            let x = +prompt("Nhập số cần tìm: ");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === x) {
                    count++;
                }
            }
            alert(`Số lần xuất hiện của ${x} trong mảng là: ${count}`);
            break;
        }
        case 6:
            arr.sort((a, b) => a - b);
            alert(`Mảng sau khi sắp xếp tăng dần là: ${arr}`);
            break;
        case 7:
            alert("Chương trình kết thúc");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 7);