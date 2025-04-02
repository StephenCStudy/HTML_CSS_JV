class Product {
    constructor(id, name, price, cetegory, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = cetegory;
        this.quantity = quantity;
    }
}
let choice = 0;
let product = [];
do {
    choice = +prompt(`MENU
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.       
    `)
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            showAllProduct();
            break;
        case 3:
            showDetailProductById();
            break;
        case 4:
            UpdateProductById();
            break;
        case 5:
            deleteProductById();
            break;
        case 6:
            searchProduct();
            break;
        case 7:
            alert('Thoát');
            break;
        default:
            alert('Chọn lại');
            break;
    }
} while (choice != 7);


function addProduct() {
    let id = +prompt('Nhập id sản phẩm: ');
    let name = prompt('Nhập tên sản phẩm: ');
    let price = +prompt('Nhập giá sản phẩm: ');
    let category = prompt('Nhập loại sản phẩm: ');
    let quantity = +prompt('Nhập số lượng sản phẩm: ');
    product.push(new Product(id, name, price, category, quantity));
}

function showAllProduct() {
    for (let i = 0; i < product.length; i++) {
        console.table(product[i]);
    }
}

function showDetailProductById() {
    let id = +prompt('Nhập id sản phẩm: ');
    let found = false;
    for (let i = 0; i < product.length; i++) {
        if (product[i].id === id) {
            console.table(product[i]);
            found = true;
            break;
        }
    }
    if (!found) {
        alert('Không tìm thấy sản phẩm');
    }
}

function UpdateProductById() {
    let id = +prompt('Nhập id sản phẩm: ');
    let found = false;
    for (let i = 0; i < product.length; i++) {
        if (product[i].id === id) {
            console.table(product[i]);
            product[i].name = prompt('Nhập tên sản phẩm mới: ');
            product[i].price = +prompt('Nhập giá sản phẩm mới: ');
            product[i].category = prompt('Nhập loại sản phẩm mới: ');
            product[i].quantity = +prompt('Nhập số lượng sản phẩm mới: ');
            found = true;
            break;
        }
    }
    if (!found) {
        alert('Không tìm thấy sản phẩm');
    }
    showAllProduct();
}

function deleteProductById() {
    let id = +prompt('Nhập id sản phẩm: ');
    let found = false;
    for (let i = 0; i < product.length; i++) {
        if (product[i].id === id) {
            product.splice(i, 1);
            found = true;
            break;
        }
    }
    if (!found) {
        alert('Không tìm thấy sản phẩm');
    }
    showAllProduct();
}

function searchProduct() {
    let keyword = +prompt('Nhập price tìm kiếm: ');
    let found = false;
    for (let i = 0; i < product.length; i++) {
        if (product[i].price <= keyword) {
            console.table(product[i]);
            found = true;
        }
    }
    if (!found) {
        alert('Không tìm thấy sản phẩm');
    }
    showAllProduct();
}