class Book {
    constructor(id, name, price, quantity, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}

let book = [
    new Book(1, "JavaScript Basics", 150000, 10, "Programming"),
    new Book(2, "Harry Potter", 200000, 5, "Fiction"),
];

let cart = [];
let choice = 0;

do {
    choice = +prompt(`MENU
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id
4. Mua sách (Nhập id sách cần mua và số lượng)
5. Sắp xếp sách theo giá: (1.Tăng/2. Giảm dần)
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho
8. Thoát chương trình`);

    switch (choice) {
        case 1:
            showListBookByCategory();
            break;
        case 2:
            addNewBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooksByPrice();
            break;
        case 6:
            showCart();
            break;
        case 7:
            showTotalBooksInStock();
            break;
        case 8:
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            alert("Bạn nhập sai, vui lòng nhập lại!");
            break;
    }
} while (choice != 8);

function showListBookByCategory() {
    let category = prompt("Nhập thể loại sách muốn xem: ");
    let listBook = [];
    
    for (let i = 0; i < book.length; i++) {
        if (book[i].category.toLowerCase() === category.toLowerCase()) {
            listBook.push(book[i]);
        }
    }
    
    if (listBook.length === 0) {
        alert("Không tìm thấy sách thuộc thể loại này!");
    } else {
        console.log("Danh sách sách theo thể loại " + category + ":");
        console.table(listBook);
    }
}

function addNewBook() {
    let id = +prompt("Nhập ID sách mới:");
    
    for (let i = 0; i < book.length; i++) {
        if (book[i].id === id) {
            alert("ID sách đã tồn tại, vui lòng nhập ID khác!");
            return;
        }
    }
    
    let name = prompt("Nhập tên sách:");
    let price = +prompt("Nhập giá sách:");
    let quantity = +prompt("Nhập số lượng sách:");
    let category = prompt("Nhập thể loại sách:");
    
    let newBook = new Book(id, name, price, quantity, category);
    book.push(newBook);
    alert("Thêm sách mới thành công!");
}

function searchBook() {
    let searchTerm = prompt("Nhập ID hoặc tên sách cần tìm:");
    let result = [];
    
    for (let i = 0; i < book.length; i++) {
        if (book[i].id === +searchTerm || book[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            result.push(book[i]);
        }
    }
    
    if (result.length === 0) {
        alert("Không tìm thấy sách phù hợp!");
    } else {
        console.log("Kết quả tìm kiếm:");
        console.table(result);
    }
}

function buyBook() {
    let id = +prompt("Nhập ID sách muốn mua:");
    let quantity = +prompt("Nhập số lượng muốn mua:");
    let foundBook = null;
    let foundIndex = -1;
    
    for (let i = 0; i < book.length; i++) {
        if (book[i].id === id) {
            foundBook = book[i];
            foundIndex = i;
            break;
        }
    }
    
    if (!foundBook) {
        alert("Không tìm thấy sách với ID này!");
        return;
    }
    
    if (foundBook.quantity < quantity) {
        alert(`Số lượng sách trong kho không đủ! Hiện chỉ còn ${foundBook.quantity} cuốn.`);
        return;
    }
    
    book[foundIndex].quantity -= quantity;
    
    let inCart = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity += quantity;
            cart[i].total = cart[i].price * cart[i].quantity;
            inCart = true;
            break;
        }
    }
    
    if (!inCart) {
        cart.push({
            id: foundBook.id,
            name: foundBook.name,
            price: foundBook.price,
            quantity: quantity,
            total: foundBook.price * quantity
        });
    }
    
    alert(`Đã thêm ${quantity} cuốn "${foundBook.name}" vào giỏ hàng!`);
}

function sortBooksByPrice() {
    let sortOption = +prompt("Sắp xếp theo giá: 1. Tăng dần / 2. Giảm dần");
    
    let sortedBooks = [...book]; 
    
    if (sortOption === 1) {
        for (let i = 0; i < sortedBooks.length - 1; i++) {
            for (let j = i + 1; j < sortedBooks.length; j++) {
                if (sortedBooks[i].price > sortedBooks[j].price) {
                    let temp = sortedBooks[i];
                    sortedBooks[i] = sortedBooks[j];
                    sortedBooks[j] = temp;
                }
            }
        }
        console.log("Danh sách sách theo giá tăng dần:");
    } else if (sortOption === 2) {
        for (let i = 0; i < sortedBooks.length - 1; i++) {
            for (let j = i + 1; j < sortedBooks.length; j++) {
                if (sortedBooks[i].price < sortedBooks[j].price) {
                    let temp = sortedBooks[i];
                    sortedBooks[i] = sortedBooks[j];
                    sortedBooks[j] = temp;
                }
            }
        }
        console.log("Danh sách sách theo giá giảm dần:");
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }
    
    console.table(sortedBooks);
}

function showCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        return;
    }
    
    let totalQuantity = 0;
    let totalAmount = 0;
    
    for (let i = 0; i < cart.length; i++) {
        totalQuantity += cart[i].quantity;
        totalAmount += cart[i].total;
    }
    
    console.log("Thông tin giỏ hàng:");
    console.table(cart);
    console.log(`Tổng số lượng sách: ${totalQuantity}`);
    console.log(`Tổng tiền: ${totalAmount.toLocaleString()} VND`);
}

function showTotalBooksInStock() {
    let totalBooks = 0;
    
    for (let i = 0; i < book.length; i++) {
        totalBooks += book[i].quantity;
    }
    
    alert(`Tổng số lượng sách trong kho: ${totalBooks} cuốn`);
}