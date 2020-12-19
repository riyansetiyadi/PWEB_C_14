function formMasuk(){
    let email = document.forms["masuk"]["email"].value;
    let password = document.forms["masuk"]["password"].value;
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
    let email = document.forms["daftar"]["email"].value;
    let password = document.forms["daftar"]["password"].value;
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
    let email = document.forms["ubah"]["email"].value;
    if (email==""){
        alert('isi email anda');
        return false;
    } else if (email.length>0){
        alert("tautan ubah password telah dikirim ke email " + email);
        return false;
    }
}

let Jagung = {
    nama : "jagung",
    harga : 5000,
    toko  :"Rosa olshop",
}
let Beras = {
    nama : "Beras",
    harga : 10000,
    toko : "Rosa olshop"
}
let Cabai = {
    nama : "Cabai",
    harga : 20000,
    toko : "Rosa olshop"
}
let Jeruk = {
    nama : "jeruk",
    harga : 10000,
    toko : "Rosa olshop"
}
let Kentang = {
    nama : "Kentang",
    harga : 15000,
    toko : "Rosa olshop"
}
let Semangka = {
    nama : "Semangka",
    harga : 8000,
    toko : "Rosa olshop"
}
let Kubis = {
    nama : "Kubis",
    harga : 2500,
    toko : "Rosa olshop"
}
let Terong = {
    nama : "Terong",
    harga : 5000,
    toko : "Rosa olshop"
}
let Bombay = {
    nama : "Bombay",
    harga : 3000,
    toko : "Rosa olshop"
}