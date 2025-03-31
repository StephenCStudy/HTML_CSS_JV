let choice = 0;
do {
    choice = +prompt(
`MENU
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.
Nhập lựa chọn của bạn:`);

    switch (choice) {
        case 1:
            alert("Diện tích hình tròn: " + dientichhinhtron().toFixed(2));
            break;
        case 2:
            alert("Chu vi hình tròn: " + chuvihinhtron().toFixed(2));
            break;
        case 3:
            alert("Diện tích hình chữ nhật: " + dientichhinhchunhat().toFixed(2));
            break;
        case 4:
            alert("Chu vi hình chữ nhật: " + chuvihinhchunhat().toFixed(2));
            break;
        case 5:
            alert("Cảm ơn bạn đã sử dụng chương trình. Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
            break;
    }
} while (choice !== 5);

function dientichhinhtron() {
    let r;
    do {
        r = +prompt("Nhập bán kính hình tròn (số dương):");
        if (r <= 0 || isNaN(r)) alert("Giá trị không hợp lệ. Vui lòng nhập lại.");
    } while (r <= 0 || isNaN(r));
    return Math.PI * Math.pow(r, 2);
}

function chuvihinhtron() {
    let r;
    do {
        r = +prompt("Nhập bán kính hình tròn (số dương):");
        if (r <= 0 || isNaN(r)) alert("Giá trị không hợp lệ. Vui lòng nhập lại.");
    } while (r <= 0 || isNaN(r));
    return 2 * Math.PI * r;
}

function dientichhinhchunhat() {
    let a, b;
    do {
        a = +prompt("Nhập chiều dài hình chữ nhật (số dương):");
        if (a <= 0 || isNaN(a)) alert("Giá trị không hợp lệ. Vui lòng nhập lại.");
    } while (a <= 0 || isNaN(a));
    do {
        b = +prompt("Nhập chiều rộng hình chữ nhật (số dương):");
        if (b <= 0 || isNaN(b)) alert("Giá trị không hợp lệ. Vui lòng nhập lại.");
    } while (b <= 0 || isNaN(b));
    return a * b;
}

function chuvihinhchunhat() {
    let a, b;
    do {
        a = +prompt("Nhập chiều dài hình chữ nhật (số dương):");
        if (a <= 0 || isNaN(a)) alert("Giá trị không hợp lệ. Vui lòng nhập lại.");
    } while (a <= 0 || isNaN(a));
    do {
        b = +prompt("Nhập chiều rộng hình chữ nhật (số dương):");
        if (b <= 0 || isNaN(b)) alert("Giá trị không hợp lệ. Vui lòng nhập lại.");
    } while (b <= 0 || isNaN(b));
    return 2 * (a + b);
}