function cart() {
    thanhcong = true;
    thongbao = "";

    if (thongbao == "") {
        thongbao += `<div class="js-toast-content toast toast--success">
        <div class="toast__icon">
            <i class="fa-solid fa-circle-check"></i>
        </div>
        <div class="toast__body">
            <div class="toast__title">Add to cart successfully</div>
            <div class="toast__mess">Your order has been added to the cart.</div>
        </div>
        <div class="toast__close">
            <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
    </div>`;
        thanhcong = false;
    }
    document.getElementById("toast").innerHTML = thongbao;
    return thanhcong;

}
setTimeout("document.getElementById('toast').innerHTML= '' ", 3000);



// Ẩn close
// const toast = document.querySelector('#toast')
// const Closestoast = document.querySelectorAll('.toast__close')
// const toastContent = document.querySelector('.js-toast-content')

// function hideBuyTickets() {
//     toast.classList.remove('open')
// }
// for (const Closetoast of Closestoast) {
//     Closetoast.addEventListener('click', hideBuyTickets)
// }

// toast.addEventListener('click', hideBuyTickets)

// toastContent.addEventListener('click', function(event) {
//     event.stopPropagation()
// })