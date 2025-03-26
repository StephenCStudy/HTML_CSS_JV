let choice = 0;
let str = "";
do {
    choice = +prompt(`MENU
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình`);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi: ");
            break;
        case 2:
            alert(str);
            break;
        case 3:
            alert("Độ dài chuỗi là: " + str.length);
            break;
        case 4: {
            let char = prompt("Nhập ký tự cần đếm: ");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === char) {
                    count++;
                }
            }
            alert(`Ký tự ${char} xuất hiện ${count} lần trong chuỗi`);
            break;
        }
        case 5: {
            let isSymmetry = true;
            for (let i = 0; i < str.length / 2; i++) {
                if (str[i] !== str[str.length - 1 - i]) {
                    isSymmetry = false;
                    break;
                }
            }
            if (isSymmetry) {
                alert("Chuỗi là chuỗi đối xứng");
            } else {
                alert("Chuỗi không phải là chuỗi đối xứng");
            }
            break;
        }
        case 6: {
            let arr = str.split(" ");
            let newStr = "";
            for (let i = 0; i < arr.length; i++) {
                newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
            }
            alert(newStr);
            break;
        }
        case 7:
            alert("Thoát chương trình");
            break;
        default:
            alert("Nhập sai, vui lòng nhập lại");
            break;
    }
} while (choice != 7);