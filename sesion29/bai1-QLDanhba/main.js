class Contact {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

let contacts = [];
let choice = 0;

do {
    choice = +prompt(`MENU
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact theo id.
5. Xóa một đối tượng Contact khỏi danh sách theo id.
6. Thoát.`);
    
    switch (choice) {
        case 1:
            addNewContact();
            break;
        case 2:
            showContacts();
            break;
        case 3:
            findContactByPhone();
            break;
        case 4:
            updateContact();
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 6);

function addNewContact() {
    let id = prompt("Nhập id:");
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");
    if (isNaN(id) || name === "" || email === "" || phone.length < 9) {
        alert("Dữ liệu nhập vào không hợp lệ!");
        return;
    }
    contacts.push(new Contact(id, name, email, phone));
    alert("Thêm liên hệ thành công!");
}

function showContacts() {
    if (contacts.length === 0) {
        alert("Danh sách liên hệ rỗng.");
        return;
    }
    let contactList = contacts.map(c => `${c.id} | ${c.name} | ${c.email} | ${c.phone}`).join("\n");
    alert("Danh sách liên hệ:\n" + contactList);
}

function findContactByPhone() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let foundContact = contacts.find(contact => contact.phone === phone);
    if (foundContact) {
        alert(`Thông tin liên hệ:\nID: ${foundContact.id}\nTên: ${foundContact.name}\nEmail: ${foundContact.email}\nSĐT: ${foundContact.phone}`);
    } else {
        alert("Không tìm thấy liên hệ nào với số điện thoại này.");
    }
}

function updateContact() {
    let id = prompt("Nhập id:");
    let foundContact = contacts.find(contact => contact.id === id);
    if (!foundContact) {
        alert("Không tìm thấy liên hệ nào với id này.");
        return;
    }
    let name = prompt("Nhập tên mới:");
    let email = prompt("Nhập email mới:");
    let phone = prompt("Nhập số điện thoại mới:");
    foundContact.name = name;
    foundContact.email = email;
    foundContact.phone = phone;
    alert("Cập nhật thông tin thành công.");
}

function deleteContact() {
    let id = prompt("Nhập id:");
    let foundIndex = contacts.findIndex(contact => contact.id === id);
    if (foundIndex === -1) {
        alert("Không tìm thấy liên hệ nào với id này.");
        return;
    }
    let choice = +prompt("Bạn có chắc muốn xóa? 1. Có / 2. Không:");
    if (choice === 1) {
        contacts.splice(foundIndex, 1);
        alert("Xóa thành công.");
    } else {
        alert("Không xóa.");
    }
}