const Name = ["Rau sạch", "Thịt lợn", "Pepsi không calo", "Cocacola", "Cờ lê", "Tuy vít"];
const category = ["Đồ ăn", "Đồ ăn", "Nước", "Nước", "Dụng cụ", "Dụng cụ"];

function showItems() {
    const selectedCategoryIndex = document.getElementById("category").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 

    if (selectedCategoryIndex === "0") {
        resultDiv.innerHTML = "Vui lòng chọn danh mục!";
        return;
    }

    const selectedCategory = document.querySelector(`#category option[value="${selectedCategoryIndex}"]`).textContent;

    let output = `<strong>Danh mục: ${selectedCategory}</strong><ul>`;
    for (let i = 0; i < Name.length; i++) {
        if (category[i] === selectedCategory) {
            output += `<li>${Name[i]}</li>`;
        }
    }
    output += "</ul>";
    resultDiv.innerHTML = output;
}