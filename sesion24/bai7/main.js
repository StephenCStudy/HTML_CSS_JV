let choice = 0;
let str = "";
do {
    choice = +prompt(`MENU
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự trong chuỗi gốc. Hiển thị chuỗi sau khi thay thế
7. Thoát chương trình    
        `)
        switch(choice){
            case 1:
                str = prompt("Nhập chuỗi");
                break;
            case 2:
                alert(str);
                break;
            case 3:
                str = str.trim();
                alert(str);
                break;
            case 4:
                str = str.split("").reverse().join("");
                alert(str);
                break;
            case 5:
                let count = 0;
                let arr = str.split(" ");
                for(let i = 0; i < arr.length; i++){
                    count++;
                }
                alert(`Số lượng từ trong chuỗi là ${count}`);
                break;
            case 6:
                let char = prompt("Nhập ký tự cần tìm");
                let replace = prompt("Nhập ký tự thay thế");
                str = str.replaceAll(char, replace);
                alert(str);
                break;
            case 7:
                alert("kết thúc chương trình");
                break;
            default:
                alert("Nhập sai");
                break;
        }
} while(choice != 7);

