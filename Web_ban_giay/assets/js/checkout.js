function checkout() {
    thanhcong = true;
    thongbao = "";

    // Name
    var ten = document.getElementById("ten");
    if (ten.value.length < 3 || ten.value.length > 20) {
        thongbao += "<p>Please enter fullName from 3 to 20 characters</p> </br>";
        thanhcong = false;
    }
    // // Email
    // var mail = document.getElementById("mail");
    // if (mail.value.length < 8 || mail.value.length > 40) {
    //     thongbao += "<p>Please enter Email from 9 to 40 characters</p> </br>";
    //     thanhcong = false;
    // }
    // // Phone Number
    // var phone = document.getElementById("phone");
    // if (phone.value.length != 10) {
    //     thongbao += "<p>Please enter phone number 10 characters </p></br>";
    //     thanhcong = false;
    // }

    // // Address
    // var address = document.getElementById("address");
    // if (address.value.length < 3 || address.value.length > 20) {
    //     thongbao += "<p>Please enter address from 3 to 20 characters</p> </br>";
    //     thanhcong = false;
    // }

    // // Wards
    // var wards = document.getElementById("wards");
    // if (wards.value.length < 3 || wards.value.length > 20) {
    //     thongbao += "<p>Please enter wards from 3 to 20 characters</p> </br>";
    //     thanhcong = false;
    // }

    // // District
    // var district = document.getElementById("district");
    // if (district.value.length < 3 || district.value.length > 20) {
    //     thongbao += "<p>Please enter district from 3 to 20 characters</p> </br>";
    //     thanhcong = false;
    // }

    // // Province / City
    // var city = document.getElementById("city");
    // if (city.value.length < 3 || city.value.length > 20) {
    //     thongbao += "<p>Please enter Province / City from 3 to 20 characters</p> </br>";
    //     thanhcong = false;
    // }


    if (thongbao == "") {
        alert("Save information successfully")

    }
    document.getElementById("kq").innerHTML = thongbao;
    return thanhcong;
}
// setTimeout("document.getElementById('kq').innerHTML= '' ", 7000);