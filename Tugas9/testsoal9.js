class Pelajar {

  constructor(nama, sekolah) {
      this._nama = nama;
      this._sekolah = sekolah;
  }

 
  setNama(nama) {
      this._nama = nama;
  }


  setSekolah(sekolah) {
      this._sekolah = sekolah;
  }

 
  getNama() {
      return this._nama;
  }

 
  getSekolah() {
      return this._sekolah;
  }


  belajar() {
      return `${this.getNama()} belajar di ${this.getSekolah()}`;
  }
}


const pelajar = new Pelajar("Alpha", "Skilvul");


console.log(pelajar.belajar());  

// batas

// soal no 2
class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas() {
    const hasil = this.panjang * this.lebar;
    return hasil;
  }

  keliling() {
    const hasil = 2 * (this.panjang + this.lebar);
    return hasil;
  }
}

const persegiPanjang = new PersegiPanjang(5, 10);

console.log("Luas:", persegiPanjang.luas());
console.log("Keliling:", persegiPanjang.keliling());
