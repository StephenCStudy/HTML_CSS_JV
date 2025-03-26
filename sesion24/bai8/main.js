let choice = 0;
let str = " ";
do {
    choice = +prompt(`MENU
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
7. Thoát chương trình  
        `)
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi ký tự");
            break;
        case 2:
            alert(str);
            break;
        case 3: {
            let arr = str.split(" ");
            let obj = {};
            for (let i = 0; i < arr.length; i++) {
                if (obj[arr[i]] == undefined) {
                    obj[arr[i]] = 1;
                } else {
                    obj[arr[i]]++;
                }
            }
            for (let key in obj) {
                if (obj[key] > 1) {
                    alert(`Các từ trùng lặp là ${key} và số lần xuất hiện là ${obj[key]}`);
                }
            }
            break;
        }
        case 4: {
            let arr = str.split(" ");
            let max = arr[0];
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].length > max.length) {
                    max = arr[i];
                }
                if (arr[i].length < min.length) {
                    min = arr[i];
                }
            }
            alert(`Các từ có độ dài lớn nhất là ${max} và độ dài nhỏ nhất là ${min}`);
            break;
        }
        case 5: {
            let arr = str.split("");
            let obj = {};
            for (let i = 0; i < arr.length; i++) {
                if (obj[arr[i]] == undefined) {
                    obj[arr[i]] = 1;
                } else {
                    obj[arr[i]]++;
                }
            }
            let max = 0;
            for (let key in obj) {
                if (obj[key] > max) {
                    max = obj[key];
                }
            }
            alert(`Số lần xuất hiện nhiều nhất của các ký tự trong chuỗi là ${max}`);
            break;
        }
        case 6: {
            let arr = str.split("");
            let str1 = "";
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != " ") {
                    str1 += arr[i];
                }
            }
            alert(`Các từ trong chuỗi là ${str1}`);
            break;
        }
        case 7:
            alert("kết thúc chương trình");
            break;
        default:
            alert("Nhập sai, vui lòng nhập lại");
            break;
    }
} while (choice != 7);