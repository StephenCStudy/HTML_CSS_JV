class WokingService {
    constructor(id, name, about, timeStart, status) {
        this.id = id;
        this.name = name;
        this.about = about;
        this.timeStart = timeStart;
        this.status = status;
    }
}

let choice = 0;
let services = [];
do {
    choice = +prompt(`MENU
1. Thêm công việc mới.
2. Hiển thị tất cả các công việc.
3. Cập nhật trạng thái công việc theo id.
4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
5. Sắp xếp các công việc theo trạng thái công việc.
6. Thoát.
    `);
    switch (choice) {
        case 1:
            addNewWork();
            break;
        case 2:
            showAllWork();
            break;
        case 3:
            updateStatus();
            break;
        case 4:
            filterWorkByStatus();
            break;
        case 5:
            sortByStatus();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Vui lòng chọn từ 1 đến 6.");
            break;
    }
} while (choice != 6);

function addNewWork() {
    let id = +prompt("Nhập id công việc");
    let name = prompt("Nhập tên công việc");
    let about = prompt("Nhập nội dung công việc");
    let timeStart = prompt("Nhập thời gian bắt đầu công việc");
    let status = prompt("Nhập trạng thái công việc");
    let service = new WokingService(id, name, about, timeStart, status);
    services.push(service);
    alert("Thêm công việc thành công");
}

function showAllWork() {
    if (services.length === 0) {
        console.log("Không có công việc nào.");
        return;
    }
    console.table(services.map(service => ({
        ID: service.id,
        Name: service.name,
        About: service.about,
        TimeStart: service.timeStart,
        Status: service.status
    })));
}

function updateStatus() {
    let id = +prompt("Nhập id công việc");
    let status = prompt("Nhập trạng thái công việc");
    let updated = false;

    for (let i = 0; i < services.length; i++) {
        if (services[i].id === id) {
            services[i].status = status;
            updated = true;
            break;
        }
    }
    if (updated) {
        alert("Cập nhật trạng thái công việc thành công");
    } else {
        alert("Không tìm thấy công việc nào với id này.");
    }
}

function filterWorkByStatus() {
    let status = prompt("Nhập trạng thái công việc");
    let filteredServices = services.filter(service => service.status === status);

    if (filteredServices.length === 0) {
        console.log("Không tìm thấy công việc với trạng thái này.");
    } else {
        console.table(filteredServices.map(service => ({
            ID: service.id,
            Name: service.name,
            About: service.about,
            TimeStart: service.timeStart,
            Status: service.status
        })));
    }
}

function sortByStatus() {
    services.sort((a, b) => a.status.localeCompare(b.status));
    console.table(services.map(service => ({
        ID: service.id,
        Name: service.name,
        About: service.about,
        TimeStart: service.timeStart,
        Status: service.status
    })));
}