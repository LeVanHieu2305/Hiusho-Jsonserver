var danhmucApi = 'http://localhost:3000/danhmucs';

function start() {
    getDanhmuc(renderDanhmuc);
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

function renderDanhmuc(danhmucs) {
    var listDanhmuc = document.querySelector('.cate-json-list');
    var htmls = danhmucs.map(function(danhmuc) {
        return `
        <option value="0" class="cate-json-item">${danhmuc.name_danhmuc}</option>
        `;
    });
    listDanhmuc.innerHTML = htmls.join('');
}