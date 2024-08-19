// Soal no 1

class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  
    makan() {
      return `${this.nama} sedang makan`;
    }
  }
  
  // Tulis kode di bawah ini
  
  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur)
      this.namaSekolah = namaSekolah;
    }
  
    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
  
    }
  
  }
  let pelajar = new Pelajar ("Terra", 17, "skilvul")
  console.log(pelajar.nama)
  console.log(pelajar.belajar())
  console.log(pelajar.tidur())
  console.log(pelajar.makan())
  console.log(pelajar)

//   batas

// soal no 2

class Hewan {
    constructor(nama) {
      this.nama = nama;
    }
  
    makan() {
      return "Hewan sedang makan";
    }
  }
  
  // Buat kode kamu di bawah ini
  
  class Harimau extends Hewan{
    constructor(nama){
    super(nama);
  
  }
  makan() {
    return `${this.nama} makan daging`;
  }
  }
  let harimuSumatra = new Harimau ("Harimau Sumatra")
  console.log(harimuSumatra.makan())
  console.log(harimuSumatra)
//   batas