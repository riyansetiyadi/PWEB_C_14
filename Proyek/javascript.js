function validasiForm(){
    var email = document.forms["masuk"]["email"].value;
    var password = document.forms["masuk"]["password"].value;
    if (email == "") {
        alert("Email harus diisi");
        return false;
    } else if (password == "") {
        alert("Password harus diisi");
        return false;
    }
    alert("Anda berhasil masuk")
}
