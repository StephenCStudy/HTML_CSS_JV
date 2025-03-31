class Book {
    constructor(id, title, author, year, price, isAvailable) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
        this.isAvailable = isAvailable;
    }
}

let books = [];

function addBook() {
    let id = +prompt("Nhập ID sách:");
    let title = prompt("Nhập tên sách:");
    let author = prompt("Nhập tác giả:");
    let year = +prompt("Nhập năm xuất bản:");
    let price = +prompt("Nhập giá sách:");
    let isAvailable = confirm("Sách có sẵn để mượn không?");
    books.push(new Book(id, title, author, year, price, isAvailable));
    alert("Thêm sách mới thành công!");
}

function removeBook() {
    let id = +prompt("Nhập ID sách cần xóa:");
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        alert(`Đã xóa sách với ID ${id}.`);
    } else {
        alert("Không tìm thấy sách.");
    }
}

function updateBookStatus() {
    let id = +prompt("Nhập ID sách cần cập nhật trạng thái:");
    const book = books.find(book => book.id === id);
    if (book) {
        book.isAvailable = confirm("Sách có sẵn để mượn không?");
        alert(`Đã cập nhật trạng thái cho sách ID ${id}.`);
    } else {
        alert("Không tìm thấy sách.");
    }
}

function searchBookByTitle() {
    let title = prompt("Nhập tên sách cần tìm:");
    const result = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (result.length > 0) {
        console.log("Danh sách sách tìm được:", result);
    } else {
        alert("Không tìm thấy sách.");
    }
}

function displayBooks() {
    if (books.length === 0) {
        alert("Chưa có sách nào trong danh sách.");
    } else {
        console.log("Danh sách sách:");
        books.forEach(book => console.log(book));
    }
}

function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
    alert("Đã sắp xếp sách theo giá.");
    displayBooks();
}

let choice;
do {
    choice = +prompt(`MENU
        1. Thêm sách mới
        2. Xóa sách theo ID
        3. Cập nhật trạng thái sách
        4. Tìm kiếm sách theo tên
        5. Hiển thị tất cả sách
        6. Sắp xếp sách theo giá
        7. Thoát
    `);
    switch (choice) {
        case 1:
            addBook();
            break;
        case 2:
            removeBook();
            break;
        case 3:
            updateBookStatus();
            break;
        case 4:
            searchBookByTitle();
            break;
        case 5:
            displayBooks();
            break;
        case 6:
            sortBooksByPrice();
            break;
        case 7:
            alert("Cảm ơn bạn đã sử dụng chương trình. Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
} while (choice !== 7);