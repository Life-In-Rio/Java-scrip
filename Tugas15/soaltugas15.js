// soal 1
function insert(){
    let num = prompt("Masukkan angka");
    if(num < 10){
        alert("angka lebih kecil dari 10");
    }else if(num > 10){
        alert("angka lebih besar dari 10");
    }else{
        alert("angka sama dengan 10");
    }
}

// soal 2
function insert2(){
    confirm("Pilih OK atau CANCEL")
    ? alert("Anda memilih OK")
    : alert("Anda memilih CANCEL");
}

// soal 3
function insert3(){
    const name = prompt("Siapa nama kamu?");
    if(name == null || name == ""){
        alert("Anda tidak memasukkan nama");
    }else{
        alert("selamat datang " + name);
    }
}

// soal 4
function insert4(){
    alert("Welcome")
    const konfirmasi = confirm("Mau masukan nama anda?")
  if(konfirmasi == true){
    const name = prompt("Siapa nama kamu?")
    if(name == null || name == ""){
        alert("Terima kasih");
    }else{
        alert("selamat datang " + name);
    }
  }else{
    alert("Terima kasih");
  }
    
}