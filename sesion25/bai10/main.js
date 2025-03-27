let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000],
];

let cart = [];

function displayProducts() {
    let message = "Danh sách sản phẩm:\n";
    products.forEach(product => {
        message += `${product[0]} - Số lượng: ${product[1]} - Giá: ${product[2]} VND\n`;
    });
    alert(message);
}

function addToCart(productName) {
    let product = products.find(p => p[0] === productName);

    if (!product) {
        alert("Sản phẩm không có trong cửa hàng.");
        return;
    }

    if (product[1] === 0) {
        alert(`Sản phẩm ${product[0]} đã hết.`);
        return;
    }

    product[1]--;

    let itemInCart = cart.find(c => c[0] === productName);
    if (itemInCart) {
        itemInCart[1]++;
    } else {
        cart.push([product[0], 1, product[2]]);
    }

    alert(`Đã thêm ${productName} vào giỏ hàng.`);
}

function calculateTotal() {
    let total = 0;
    let message = "Hóa đơn của bạn:\n";
    cart.forEach(item => {
        let itemTotal = item[1] * item[2];
        total += itemTotal;
        message += `${item[0]} - Số lượng: ${item[1]} - Giá: ${item[2]} VND - Tổng: ${itemTotal} VND\n`;
    });
    message += `Tổng tiền: ${total} VND`;
    alert(message);
}

function main() {
    let flag = true;

    while (flag) {
        let choice = prompt(`Menu:
            1. Xem danh sách sản phẩm 
            2. Mua sản phẩm
            3. Hiển thị hóa đơn
            4. Thoát`);
        
        switch (choice) {
            case "1":
                displayProducts();
                break;
            case "2":
                let productName = prompt("Nhập tên sản phẩm muốn mua:");
                addToCart(productName);
                break;
            case "3":
                calculateTotal();
                break;
            case "4":
                flag = false;
                alert("Cảm ơn bạn đã mua sắm. Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}

main();