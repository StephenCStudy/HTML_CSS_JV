const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://th.bing.com/th/id/OIP.Iu_SEgMtFhG8elSKNNhu4QHaEZ?w=314&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.1xaQ7CIJ5xVi0nWIqnPx9AHaFj?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.mWMyoSVKCupwTCQpLP4_MwHaHc?w=195&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://th.bing.com/th/id/OIP.t0YVXAbLwx9kNKy9NptdMQHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    },
];

function renderProducts(data) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    data.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <button>Mua</button>
            </div>
        `;
        productList.innerHTML += card;
    });
}

function searchProducts() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredProducts);
}

renderProducts(products);
