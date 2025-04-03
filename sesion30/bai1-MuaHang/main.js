let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "Mứt",
        price: 80000,
        quantity: 21,
        category: "Món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "Cơm lam",
        price: 40000,
        quantity: 15,
        category: "Món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "Bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "Món ăn dân tộc Kinh"
    }
];
let cart = [];

let choice = 0;
do {
    choice = +prompt(`MENU
    1. Hiển thị các sản phẩm theo tên danh mục.
    2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
    3. Sắp xếp các sản phẩm trong cửa hàng theo giá (1.Tăng/2.Giảm).
    4. Tính số tiền thanh toán trong giỏ hàng.
    5. Thoát.
    `);

    switch (choice) {
        case 1:
            showProductByCategory();
            break;
        case 2:
            selectProductByID();
            break;
        case 3:
            sortProductByPrice();
            break;
        case 4:
            calculateTotalPrice();
            break;
        case 5:
            alert("Thoát chương trình...");
            break;
        default:
            alert("Vui lòng nhập lại!");
            break;
    }
} while (choice !== 5);

function showProductByCategory() {
    let category = prompt(`Nhập tên danh mục cần hiển thị:
                           Món ăn dân tộc Mông
                           Món ăn dân tộc Kinh`);
    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length > 0) {
        console.table(filteredProducts); 
    } else {
        alert("Không tìm thấy sản phẩm thuộc danh mục này.");
    }
}

function selectProductByID() {
    let id = +prompt("Nhập ID sản phẩm cần mua (hoặc nhập 0 để thoát):");
    if (id === 0) return;

    const product = products.find(product => product.id === id);
    if (product) {
        let quantityToBuy = +prompt(`Số lượng hiện có: ${product.quantity}. Nhập số lượng muốn mua:`);

        if (quantityToBuy <= 0 || isNaN(quantityToBuy)) {
            alert("Vui lòng nhập một số lượng hợp lệ.");
        } else if (quantityToBuy > product.quantity) {
            alert("Không đủ số lượng sản phẩm trong kho.");
        } else {
            product.quantity -= quantityToBuy;
            cart.push({ ...product, quantity: quantityToBuy });
            alert("Mua thành công!");
        }
    } else {
        alert("Không tìm thấy sản phẩm này.");
    }
}

function sortProductByPrice() {
    let choice = +prompt(`Chọn cách sắp xếp:
                        1. Tăng dần
                        2. Giảm dần
                        `);
    if (choice === 1) {
        products.sort((a, b) => a.price - b.price);
        console.table(products); 
    } else if (choice === 2) {
        products.sort((a, b) => b.price - a.price);
        console.table(products);
    } else {
        alert("Vui lòng nhập lại.");
    }
}

function calculateTotalPrice() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cart.length > 0) {
        console.table(cart);
        console.log(`Tổng tiền thanh toán: ${total} VND`);
    } else {
        console.log("Giỏ hàng của bạn đang trống.");
    }
}