var productApi = 'http://localhost:3000/products';

function start() {
    getProduct(renderProduct);

    handleCreateProduct();
};
start();

//Function
function getProduct(callback) {
    fetch(productApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createProduct(data, callback) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };

    fetch(productApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleDeleteProduct(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    fetch(productApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function updateProduct(id, data, callback) {
    var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };

    fetch(productApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

// function renderProduct(products) {
//     var listProduct = document.querySelector('.table__item');
//     var htmls = products.map(function(product) {
//         return `
//         <tr class="table__list">
//         <td><input type="checkbox" name="" id=""></td>
//                             <td>${product.id_sanpham}</td>
//                             <td>${product.name_sanpham}</td>
//                             <td><img src="C" width="80px"></td>
//                             <td>${product.quantity}</td>
//                             <td>${product.giasale}</td>
//                             <td>${product.giagoc}</td>
//                             <td><button>Sửa</button> | <button onclick="handleDeleteProduct(${product.id})">Xóa</button></td>
//                             </tr>

//         `
//     });
//     listProduct.innerHTML = htmls.join('')
// }
function renderProduct(products) {
    var listProduct = document.querySelector('.table__item');
    var htmls = products.map(function(product) {
        return `
        <tr class="table__list">
            <td><input type="checkbox" name="" id=""></td>
            <td>${product.id_sanpham}</td>
            <td>${product.name_sanpham}</td>
            <td><img src="${product.image}" width="80px"></td>
            <td>${product.quantity}</td>
            <td>${product.giasale}</td>
            <td>${product.giagoc}</td>
            <td><button onclick="handleUpdateProduct(${product.id})">Sửa</button> | <button onclick="handleDeleteProduct(${product.id})">Xóa</button></td>
        </tr>
        `;
    });
    listProduct.innerHTML = htmls.join('');
}

function handleUpdateProduct(id) {
    // Lấy thông tin sản phẩm cần cập nhật từ trang web
    var id_sanpham = document.querySelector('input[name="id_sanpham"]').value;
    var name_sanpham = document.querySelector('input[name="name_sanpham"]').value;
    var giasale = document.querySelector('input[name="giasale"]').value;
    var giagoc = document.querySelector('input[name="giagoc"]').value;
    var quantity = document.querySelector('input[name="quantity"]').value;
    var image = document.querySelector('input[name="image"]').value;

    // Tạo đối tượng dữ liệu mới của sản phẩm
    var productData = {
        id_sanpham: id_sanpham,
        name_sanpham: name_sanpham,
        giasale: giasale,
        giagoc: giagoc,
        quantity: quantity,
        image: image
    };

    // Cập nhật sản phẩm bằng phương thức PUT và sau đó cập nhật danh sách sản phẩm trên trang web
    updateProduct(id, productData, function() {
        getProduct(renderProduct);
    });
}

function handleCreateProduct() {
    var createBtn = document.querySelector('#themmoi');

    createBtn.onclick = function() {
        var id_sanpham = document.querySelector('input[name="id_sanpham"]').value;
        var name_sanpham = document.querySelector('input[name="name_sanpham"]').value;
        var giasale = document.querySelector('input[name="giasale"]').value;
        var giagoc = document.querySelector('input[name="giagoc"]').value;
        var quantity = document.querySelector('input[name="quantity"]').value;
        var image = document.querySelector('input[name="image"]').value;

        var productData = {
            id_sanpham: id_sanpham,
            name_sanpham: name_sanpham,
            giasale: giasale,
            giagoc: giagoc,
            quantity: quantity,
            image: image
        };

        createProduct(productData, function() {
            getProduct(renderProduct);
        });
    }
}