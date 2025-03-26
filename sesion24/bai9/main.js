let choice = 0;
let str = "";
do {
    choice = +prompt(`MENU
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào. Ví dụ: "Hello", “abcdefg" → “Haeblcldoefg”
6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
7. Thoát chương trình
        `)
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi ký tự");
            break;
        case 2:
            alert(str);
            break;
        case 3:
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] == " " || str[i] == "!" || str[i] == "?" || str[i] == "," || str[i] == "." || str[i] == ";" || str[i] == ":") {
                    count++;
                }
            }
            alert(`Số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào là ${count}`);
            break;
        case 4:
            let str1 = "";
            for (let i = 0; i < str.length; i++) {
                if (str[i] == str[i].toUpperCase()) {
                    str1 += str[i].toLowerCase();
                } else {
                    str1 += str[i].toUpperCase();
                }
            }
            alert(str1);
            break;
        case 5:
            let str2 = prompt("Nhập chuỗi ký tự thứ 2");
            let str3 = "";
            for (let i = 0; i < str.length; i++) {
                str3 += str[i];
            }
            for (let i = 0; i < str2.length; i++) {
                str3 += str2[i];
            }
            alert(str3);
            break;
        case 6:
            let arr = str.split(" ");
            arr.sort(function (a, b) {
                return a.length - b.length;
            });
            alert(arr.join(" "));
            break;
        case 7:
            alert("ket thuc chương trình");
            break;
        default:
            alert("Nhập sai, vui lòng nhập lại");
            break;
    }
} while (choice != 7) 