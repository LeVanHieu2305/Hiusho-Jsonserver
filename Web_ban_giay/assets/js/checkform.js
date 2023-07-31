function checklogin() {
    thanhcong = true;
    thongbao = "";

    var accout = document.getElementById("accout");

    if (accout.value.length < 8 || accout.value.length > 40) {
        thongbao += "<p>Please enter email and phone number from 9 to 40 characters </p></br>";
        thanhcong = false;
    }
    var password = document.getElementById("password");
    if (password.value.length < 5 || password.value.length > 20) {
        thongbao += "<p>Please enter password from 6 to 20 characters </p></br>";
        thanhcong = false;
    }
    if (thongbao == "") {
        alert("Save information successfully")

    }
    document.getElementById("kq").innerHTML = thongbao;
    return thanhcong;
}
// setTimeout("document.getElementById('kq').innerHTML= '' ", 7000);



function checkregister() {
    thanhcong = true;
    thongbao = "";

    // Name
    var fullName = document.getElementById("fullName");
    if (fullName.value.length < 3 || fullName.value.length > 20) {
        thongbao += "<p>Please enter fullName from 3 to 20 characters</p> </br>";
        thanhcong = false;
    }
    // Email
    var email = document.getElementById("email");
    if (email.value.length < 8 || email.value.length > 40) {
        thongbao += "<p>Please enter email from 9 to 40 characters</p> </br>";
        thanhcong = false;
    }
    // Phone Number
    var phone = document.getElementById("phone");
    if (phone.value.length != 10) {
        thongbao += "<p>Please enter phone number 10 characters </p></br>";
        thanhcong = false;
    }

    // Password
    var password = document.getElementById("password");
    if (password.value.length < 5 || password.value.length > 20) {
        thongbao += "<p>Please enter password from 6 to 20 characters </p></br>";
        thanhcong = false;
    }
    // Reconfirm Password
    // var password = document.getElementById("password").value;
    // var reconfirmPassword = document.getElementById("reconfirmPassword").value;

    // if (reconfirmPassword.value == password.value) {
    //     thongbao += "<p>Please confirm your password </br>";
    //     thanhcong = false;
    // } else {
    //     thanhcong = true;
    // }

    if (thongbao == "") {
        alert("Save information successfully")

    }
    document.getElementById("kq").innerHTML = thongbao;
    return thanhcong;
}
// setTimeout("document.getElementById('kq').innerHTML= '' ", 7000);