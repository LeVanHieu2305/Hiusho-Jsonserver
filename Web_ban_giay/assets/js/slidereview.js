var index = 1;

function chuyen() {
    var arr = [
        'assets/img/review1.png',
        'assets/img/review2.png',
        'assets/img/review3.png',
        'assets/img/review4.png',
        'assets/img/review5.png'
    ];

    document.getElementById('hinh').src = arr[index];
    index++;
    if (index == 5) {
        index = 0;
    }
}
setInterval(chuyen, 2000);