class Phone {
    constructor(id, name, price, quantity, company) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.company = company;
    }
}

let phones = [
    new Phone(1, "Galaxy S24 Untra", 15000000, 10, "Samsung"),
    new Phone(2, "iPhone 14", 25000000, 5, "Apple"),
    new Phone(3, "Redmi Note 11", 5000000, 15, "Xiaomi"),
    new Phone(5, "iPhone 13", 20000000, 7, "Apple")
];

let cart = [];

let choice = 0;

do {
    choice = +prompt(`              MENU 
1. Hiển thị danh sách điện thoại theo hãng
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại
5. Thanh toán tất cả điện thoại trong giỏ hàng
6. Sắp xếp điện thoại theo giá (1.Tăng dần/2.Giảm dần)
7. Hiển thị tổng số tiền của các điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hãng
9. Thoát chương trình`);

    switch (choice) {
        case 1:
            displayPhonesByCompany();
            break;
        case 2:
            addNewPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortPhonesByPrice();
            break;
        case 7:
            displayTotalInventoryValue();
            break;
        case 8:
            displayPhoneCountByCompany();
            break;
        case 9:
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
            break;
    }
} while (choice != 9);

function displayPhonesByCompany() {
    let company = prompt("Nhập tên hãng điện thoại (VD: Samsung, Apple, Xiaomi...): ");
    let companyPhones = [];

    for (let i = 0; i < phones.length; i++) {
        if (phones[i].company.toLowerCase() === company.toLowerCase()) {
            companyPhones.push(phones[i]);
        }
    }

    if (companyPhones.length === 0) {
        alert(`Không tìm thấy điện thoại thuộc hãng ${company}!`);
    } else {
        console.log(`Danh sách điện thoại hãng ${company}:`);
        console.table(companyPhones);
    }
}

function addNewPhone() {
    let id = +prompt("Nhập ID điện thoại mới:");

    for (let i = 0; i < phones.length; i++) {
        if (phones[i].id === id) {
            alert("ID điện thoại đã tồn tại. Vui lòng nhập ID khác!");
            return;
        }
    }

    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá điện thoại:");
    let quantity = +prompt("Nhập số lượng điện thoại:");
    let company = prompt("Nhập tên hãng điện thoại:");

    phones.push(new Phone(id, name, price, quantity, company));
    alert("Thêm điện thoại mới thành công!");
}

function searchPhone() {
    let searchTerm = prompt("Nhập ID hoặc tên điện thoại cần tìm:");
    let results = [];

    for (let i = 0; i < phones.length; i++) {
        if (phones[i].id === +searchTerm ||
            phones[i].name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(phones[i]);
        }
    }

    if (results.length === 0) {
        alert("Không tìm thấy điện thoại phù hợp!");
    } else {
        console.log("Kết quả tìm kiếm:");
        console.table(results);
    }
}

function buyPhone() {
    let id = +prompt("Nhập ID điện thoại muốn mua:");
    let quantity = +prompt("Nhập số lượng muốn mua:");
    let foundPhone = null;
    let foundIndex = -1;

    for (let i = 0; i < phones.length; i++) {
        if (phones[i].id === id) {
            foundPhone = phones[i];
            foundIndex = i;
            break;
        }
    }

    if (!foundPhone) {
        alert("Không tìm thấy điện thoại với ID này!");
        return;
    }

    if (foundPhone.quantity < quantity) {
        alert(`Số lượng điện thoại trong kho không đủ! Hiện chỉ còn ${foundPhone.quantity} chiếc.`);
        return;
    }

    phones[foundIndex].quantity -= quantity;

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
            id: foundPhone.id,
            name: foundPhone.name,
            price: foundPhone.price,
            quantity: quantity,
            company: foundPhone.company,
            total: foundPhone.price * quantity
        });
    }

    alert(`Đã thêm ${quantity} chiếc "${foundPhone.name}" vào giỏ hàng!`);
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        return;
    }

    let totalAmount = 0;
    let totalItems = 0;

    for (let i = 0; i < cart.length; i++) {
        totalAmount += cart[i].total;
        totalItems += cart[i].quantity;
    }

    console.log("Thông tin giỏ hàng trước khi thanh toán:");
    console.table(cart);
    console.log(`Tổng số lượng: ${totalItems} chiếc`);
    console.log(`Tổng tiền: ${totalAmount.toLocaleString()} VNĐ`);

    alert(`Thanh toán thành công ${totalItems} chiếc điện thoại với tổng số tiền ${totalAmount.toLocaleString()} VNĐ!`);

    cart = [];
}

function sortPhonesByPrice() {
    let sortOption = +prompt("Sắp xếp theo giá: 1. Tăng dần / 2. Giảm dần");

    let sortedPhones = [...phones];

    if (sortOption === 1) {
        for (let i = 0; i < sortedPhones.length - 1; i++) {
            for (let j = i + 1; j < sortedPhones.length; j++) {
                if (sortedPhones[i].price > sortedPhones[j].price) {
                    let temp = sortedPhones[i];
                    sortedPhones[i] = sortedPhones[j];
                    sortedPhones[j] = temp;
                }
            }
        }
        console.log("Danh sách điện thoại theo giá tăng dần:");
    } else if (sortOption === 2) {
        for (let i = 0; i < sortedPhones.length - 1; i++) {
            for (let j = i + 1; j < sortedPhones.length; j++) {
                if (sortedPhones[i].price < sortedPhones[j].price) {
                    let temp = sortedPhones[i];
                    sortedPhones[i] = sortedPhones[j];
                    sortedPhones[j] = temp;
                }
            }
        }
        console.log("Danh sách điện thoại theo giá giảm dần:");
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }

    console.table(sortedPhones);
}

function displayTotalInventoryValue() {
    let totalValue = 0;

    for (let i = 0; i < phones.length; i++) {
        totalValue += phones[i].price * phones[i].quantity;
    }

    alert(`Tổng giá trị tất cả điện thoại trong kho: ${totalValue.toLocaleString()} VNĐ`);

    console.log("Chi tiết giá trị tồn kho:");
    console.table(phones.map(phone => ({
        id: phone.id,
        name: phone.name,
        quantity: phone.quantity,
        price: phone.price,
        value: phone.price * phone.quantity
    })));
    console.log(`Tổng giá trị: ${totalValue.toLocaleString()} VNĐ`);
}

function displayPhoneCountByCompany() {
    let companies = {};

    for (let i = 0; i < phones.length; i++) {
        let company = phones[i].company;

        if (!companies[company]) {
            companies[company] = phones[i].quantity;
        } else {
            companies[company] += phones[i].quantity;
        }
    }

    console.log("Số lượng điện thoại theo từng hãng:");

    let companyList = [];
    for (let company in companies) {
        companyList.push({
            company: company,
            quantity: companies[company]
        });
    }

    console.table(companyList);

    let message = "Số lượng điện thoại theo từng hãng:\n";
    for (let company in companies) {
        message += `${company}: ${companies[company]} chiếc\n`;
    }

    alert(message);
}