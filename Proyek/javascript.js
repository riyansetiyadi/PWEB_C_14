function formMasuk(){
    var email = document.forms["masuk"]["email"].value;
    var password = document.forms["masuk"]["password"].value;
    if (email == "") {
        alert("Email harus diisi");
        return false;
    } else if (password == "") {
        alert("Password harus diisi");
        return false;
    } 
    alert("Anda berhasil masuk");
}
function formDaftar(){
    var email = document.forms["daftar"]["email"].value;
    var password = document.forms["daftar"]["password"].value;
    if (email == "") {
        alert("Email harus diisi");
        return false;
    } else if (password == "") {
        alert("Password harus diisi");
        return false;
    } 
    alert("Anda berhasil mendaftar, silahkan masuk");
}
function ubahPassword(){
    var email = document.forms["ubah"]["email"].value;
    if (email==""){
        alert('isi email anda');
        return false;
    } else if (mail.length>0){
        alert("tautan ubah password telah dikirim ke email "+ mail);
        return false;
    }
}