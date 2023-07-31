var danhmucApi = 'http://localhost:3000/danhmucs';

function start() {
    getDanhmuc(renderDanhmuc);

    handleCreateDanhmuc();
};
start();

//Function
function getDanhmuc(callback) {
    fetch(danhmucApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function createDanhmuc(data, callback) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };

    fetch(danhmucApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleDeleteDanhmuc(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    fetch(danhmucApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function updateDanhmuc(id, data, callback) {
    var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };

    fetch(danhmucApi + '/' + id, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function renderDanhmuc(danhmucs) {
    var listDanhmuc = document.querySelector('.table__item');
    var htmls = danhmucs.map(function(danhmuc) {
        return `
        <tr class="table__list">
            <td><input type="checkbox" name="" id=""></td>
            <td>${danhmuc.id_danhmuc}</td>
            <td>${danhmuc.name_danhmuc}</td>
            <td><button onclick="handleUpdateDanhmuc(${danhmuc.id})">Sửa</button> | <button onclick="handleDeleteDanhmuc(${danhmuc.id})">Xóa</button></td>
        </tr>
        `;
    });
    listDanhmuc.innerHTML = htmls.join('');
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

function handleCreateDanhmuc() {
    var createBtn = document.querySelector('#themmoi');

    createBtn.onclick = function() {
        var id_danhmuc = document.querySelector('input[name="id_danhmuc"]').value;
        var name_danhmuc = document.querySelector('input[name="name_danhmuc"]').value;

        var danhmuctData = {
            id_danhmuc: id_danhmuc,
            name_danhmuc: name_danhmuc
        };

        createDanhmuc(danhmuctData, function() {
            getDanhmuc(renderDanhmuc);
        });
    }
}