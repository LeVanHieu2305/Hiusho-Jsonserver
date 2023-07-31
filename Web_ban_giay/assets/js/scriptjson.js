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

function createProduct(id_sanpham, name_sanpham, giasale, giagoc, quantity, image) {
    fetch(productApi, {
            method: 'POST',
            body: JSON.stringify({
                id_sanpham,
                name_sanpham,
                giasale,
                giagoc,
                quantity,
                image
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function renderProduct(products) {
    var listProduct = document.querySelector('.home-product-item-json');
    var htmls = products.map(function(product) {
        return `
        <div class="col l-3 m-6 c-6 home-product-list-json">
        <a href="./assets/detailproduct.html" class="home-product-item">
        <div class="home-product-item__img">
            <img src="${product.image}" alt="" class="home-product-item__img-show">
        </div>
        <div class="home-product-item__type">
            <span class="home-product-item__classtify">${product.id_danhmuc}</span>
            <span class="home-product-item__rating">
                                <i class="home-product-item__star-gold fa-solid fa-star"></i>
                                <i class="home-product-item__star-gold fa-solid fa-star"></i>
                                <i class="home-product-item__star-gold fa-solid fa-star"></i>
                                <i class="home-product-item__star-gold fa-solid fa-star"></i>
                                <i class="home-product-item__star-gray fa-regular fa-star"></i>
                            </span>
        </div>
        <h4 class="home-product-item__name">${product.name_sanpham}</h4>
        <div class="home-product-item__price">
            <span class="home-product-item__price-current">đ${product.giasale}.000</span>
            <span class="home-product-item__price-old">đ${product.giagoc}.000</span>
        </div>
        <div class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-number">70</span>
            <span class="home-product-item__sale-off-percent">%</span>
        </div>

        <div class="home-product-item__favicon">
            <div class="home-product-item__list">
                <i class="home-product-item__list-icon fa-regular fa-heart"></i>
            </div>
            <div class="home-product-item__list">
                <i class="home-product-item__list-icon fa-solid fa-bag-shopping"></i>
            </div>
            <div class="home-product-item__list">
                <i class="home-product-item__list-icon fa-regular fa-image"></i>
            </div>
        </div>
    </a>
    </div>
        `
    });
    listProduct.innerHTML = htmls.join('')
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



        createProduct(id_sanpham, name_sanpham, giasale, giagoc, quantity, image);
    }
}