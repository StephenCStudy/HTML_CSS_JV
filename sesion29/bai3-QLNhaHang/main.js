class Categories {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Product {
    constructor(name, price, about, category) {
        this.name = name;
        this.price = price;
        this.about = about;
        this.category = category;
    }
}

let choice = 0;
let categories = [];
let products = [];

do {
    choice = +prompt(`MENU
1. Thêm món ăn vào danh mục.
2. Xóa món ăn theo tên khỏi danh mục.
3. Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).
4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
6. Thoát`);
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            deleteProduct();
            break;
        case 3:
            updateProduct();
            break;
        case 4:
            displayMenu();
            break;
        case 5:
            searchProduct();
            break;
        case 6:
            break;
        default:
            console.log("Nhập sai, vui lòng nhập lại");
            break;
    }
} while (choice != 6);

function addProduct() {
    let name = prompt("Nhập tên món ăn:");
    let price = +prompt("Nhập giá món ăn:");
    let about = prompt("Nhập mô tả món ăn:");
    let categoryId = +prompt("Nhập id của danh mục:");
    let categoryName = prompt("Nhập tên danh mục:");

    let existingCategory = categories.find(cat => cat.id === categoryId);
    let category;

    if (existingCategory) {
        category = existingCategory;
    } else {
        category = new Categories(categoryId, categoryName);
        categories.push(category);
    }

    let newProduct = new Product(name, price, about, category);
    products.push(newProduct);
    console.log("Thêm thành công");
}

function deleteProduct() {
    let name = prompt("Nhập tên món ăn cần xóa:");
    let productIndex = products.findIndex(p => p.name.toLowerCase() === name.toLowerCase());

    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        console.log("Xóa món ăn thành công");
    } else {
        console.log("Không tìm thấy món ăn với tên: " + name);
    }
}

function updateProduct() {
    let name = prompt("Nhập tên món ăn cần cập nhật:");
    let product = products.find(p => p.name.toLowerCase() === name.toLowerCase());

    if (product) {
        let newName = prompt("Nhập tên mới (nhấn Enter để giữ nguyên):", product.name) || product.name;
        let newPrice = prompt("Nhập giá mới (nhấn Enter để giữ nguyên):", product.price);
        newPrice = newPrice ? +newPrice : product.price;
        let newAbout = prompt("Nhập mô tả mới (nhấn Enter để giữ nguyên):", product.about) || product.about;

        product.name = newName;
        product.price = newPrice;
        product.about = newAbout;
        console.log("Cập nhật món ăn thành công");
    } else {
        console.log("Không tìm thấy món ăn với tên: " + name);
    }
}

function displayMenu() {
    if (products.length === 0) {
        console.log("Menu hiện tại trống!");
        return;
    }

    console.log("DANH MỤC:");
    console.table(categories);

    console.log("MÓN ĂN:");
    console.table(products.map(p => ({
        "Tên món ăn": p.name,
        "Giá": p.price,
        "Mô tả": p.about,
        "Danh mục": p.category.name
    })));
}

function searchProduct() {
    let name = prompt("Nhập tên món ăn cần tìm:");
    let foundProducts = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));

    if (foundProducts.length > 0) {
        let result = "Kết quả tìm kiếm:\n";
        foundProducts.forEach(p => {
            result += `${p.name}: ${p.price} - ${p.about} (Danh mục: ${p.category.name})\n`;
        });
        console.log(result);
    } else {
        console.log("Không tìm thấy món ăn nào với tên: " + name);
    }
}