let choice = 0;
let arr = [];
let row = 0;
let col = 0;

do {
    choice = +prompt(`Menu
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
7. Thoát chương trình`);

    switch (choice) {
        case 1:
            arr = [];
            row = +prompt("Nhập số hàng: ");
            col = +prompt("Nhập số cột: ");
            for (let i = 0; i < row; i++) {
                let temp = [];
                for (let j = 0; j < col; j++) {
                    temp.push(+prompt(`Nhập phần tử hàng ${i + 1}, cột ${j + 1}:`));
                }
                arr.push(temp);
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
                console.log("Mảng chưa được nhập!");
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
                console.log("Mảng chưa được nhập!");
            } else if (row !== col) {
                console.log("Chỉ tính tổng đường chéo chính cho ma trận vuông!");
            } else {
                let sumMainDiagonal = 0;
                for (let i = 0; i < row; i++) {
                    sumMainDiagonal += arr[i][i];
                }
                console.log(`Tổng đường chéo chính là: ${sumMainDiagonal}`);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập!");
            } else if (row !== col) {
                console.log("Chỉ tính tổng đường chéo phụ cho ma trận vuông!");
            } else {
                let sumSecondaryDiagonal = 0;
                for (let i = 0; i < row; i++) {
                    sumSecondaryDiagonal += arr[i][col - i - 1];
                }
                console.log(`Tổng đường chéo phụ là: ${sumSecondaryDiagonal}`);
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập!");
            } else {
                let type = prompt("Nhập 'row' để tính trung bình theo hàng, 'col' để tính theo cột: ").toLowerCase();
                if (type === "row") {
                    let selectedRow = +prompt(`Nhập chỉ số hàng (0 đến ${row - 1}): `);
                    if (selectedRow >= 0 && selectedRow < row) {
                        let sum = arr[selectedRow].reduce((acc, val) => acc + val, 0);
                        console.log(`Trung bình cộng hàng ${selectedRow} là: ${sum / col}`);
                    } else {
                        console.log("Chỉ số hàng không hợp lệ!");
                    }
                } else if (type === "col") {
                    let selectedCol = +prompt(`Nhập chỉ số cột (0 đến ${col - 1}): `);
                    if (selectedCol >= 0 && selectedCol < col) {
                        let sum = 0;
                        for (let i = 0; i < row; i++) {
                            sum += arr[i][selectedCol];
                        }
                        console.log(`Trung bình cộng cột ${selectedCol} là: ${sum / row}`);
                    } else {
                        console.log("Chỉ số cột không hợp lệ!");
                    }
                } else {
                    console.log("Lựa chọn không hợp lệ! Vui lòng nhập 'row' hoặc 'col'.");
                }
            }
            break;

        case 7:
            console.log("Kết thúc chương trình!");
            break;

        default:
            console.log("Nhập sai, vui lòng nhập lại!");
            break;
    }
} while (choice !== 7);
