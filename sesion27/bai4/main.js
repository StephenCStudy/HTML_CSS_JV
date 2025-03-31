let choice = 0;
let danhSachSoNguyen = []; 

do {
    choice = +prompt(`MENU
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.`);
    
    switch (choice) {
        case 1:
            danhSachSoNguyen = nhapDanhSachSoNguyen();
            alert("Danh sách số nguyên đã được nhập: " + danhSachSoNguyen.join(", "));
            break;

        case 2:
            if (danhSachSoNguyen.length > 0) {
                let avg = tinhTrungBinh(danhSachSoNguyen);
                alert("Trung bình các số: " + avg);
            } else {
                alert("Danh sách rỗng! Vui lòng nhập danh sách trước.");
            }
            break;

        case 3:
            if (danhSachSoNguyen.length > 0) {
                let maxEven = timSoChanLonNhat(danhSachSoNguyen);
                alert(maxEven !== -Infinity ? "Số chẵn lớn nhất: " + maxEven : "Không có số chẵn trong danh sách.");
            } else {
                alert("Danh sách rỗng! Vui lòng nhập danh sách trước.");
            }
            break;

        case 4:
            if (danhSachSoNguyen.length > 0) {
                let minOdd = timSoLeNhoNhat(danhSachSoNguyen);
                alert(minOdd !== Infinity ? "Số lẻ nhỏ nhất: " + minOdd : "Không có số lẻ trong danh sách.");
            } else {
                alert("Danh sách rỗng! Vui lòng nhập danh sách trước.");
            }
            break;

        case 5:
            alert("Chương trình kết thúc.");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice != 5);

function nhapDanhSachSoNguyen() {
    var danhSachSoNguyen = [];
    var n = parseInt(prompt("Nhập số phần tử của danh sách:"));
    for (var i = 0; i < n; i++) {
        var soNguyen = parseInt(prompt(`Nhập số thứ ${i + 1}:`));
        danhSachSoNguyen.push(soNguyen);
    }
    return danhSachSoNguyen;
}

function tinhTrungBinh(danhSachSoNguyen) {
    var tong = 0;
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        tong += danhSachSoNguyen[i];
    }
    return tong / danhSachSoNguyen.length;
}

function timSoChanLonNhat(danhSachSoNguyen) {
    var max = -Infinity;
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        if (danhSachSoNguyen[i] % 2 === 0 && danhSachSoNguyen[i] > max) {
            max = danhSachSoNguyen[i];
        }
    }
    return max;
}

function timSoLeNhoNhat(danhSachSoNguyen) {
    var min = Infinity;
    for (var i = 0; i < danhSachSoNguyen.length; i++) {
        if (danhSachSoNguyen[i] % 2 !== 0 && danhSachSoNguyen[i] < min) {
            min = danhSachSoNguyen[i];
        }
    }
    return min;
}