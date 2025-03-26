let choice = 0;
let arr = [];
let row = 0;
let col = 0;

do {
    choice = +prompt(`Menu
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình`);

    switch (choice) {
        case 1:
            row = +prompt("Nhập số hàng: ");
            col = +prompt("Nhập số cột: ");
            arr = [];
            for (let i = 0; i < row; i++) {
                arr[i] = [];
                for (let j = 0; j < col; j++) {
                    arr[i][j] = +prompt(`Nhập phần tử hàng ${i} cột ${j}: `);
                }
            }
            console.log("Mảng đã nhập:", arr);
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập, vui lòng chọn 1 để nhập mảng!");
            } else {
                console.log("Mảng 2 chiều:");
                for (let i = 0; i < row; i++) {
                    console.log(arr[i].join(" "));
                }
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập, vui lòng chọn 1 để nhập mảng!");
            } else {
                let sum = 0;
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log(`Tổng các phần tử trong mảng là: ${sum}`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập, vui lòng chọn 1 để nhập mảng!");
            } else {
                let max = arr[0][0];
                let indexRow = 0;
                let indexCol = 0;
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            indexRow = i+1;
                            indexCol = j+1;
                        }
                    }
                }
                console.log(`Phần tử lớn nhất trong mảng là: ${max} tại hàng ${indexRow}, cột ${indexCol}`);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập, vui lòng chọn 1 để nhập mảng!");
            } else {
                let rowSelect = +prompt("Nhập hàng cần tính trung bình cộng: ");
                if (rowSelect < 0 || rowSelect >= row) {
                    console.log("Hàng không hợp lệ!");
                } else {
                    let sum = 0;
                    for (let j = 0; j < col; j++) {
                        sum += arr[rowSelect][j];
                    }
                    console.log(`Trung bình cộng hàng ${rowSelect} là: ${sum / col}`);
                }
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập, vui lòng chọn 1 để nhập mảng!");
            } else {
                arr.reverse();
                console.log("Mảng sau khi đảo ngược thứ tự hàng:");
                for (let i = 0; i < row; i++) {
                    console.log(arr[i].join(" "));
                }
            }
            break;

        case 7:
            console.log("kết thúc chương trình!");
            break;

        default:
            console.log("Nhập sai, vui lòng nhập lại!");
            break;
    }
} while (choice !== 7);
