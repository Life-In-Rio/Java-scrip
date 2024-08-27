class Mobil {
  constructor(merk, tahun) {
    this._merk = merk;
    this._tahun = tahun;
  }

  set merk(value) {
    this._merk = value;
  }

  get merk() {
    return this._merk;
  }

  set tahun(value) {
    this._tahun = value;
  }
  get tahun() {
    return this._tahun;
  }
}

const mobil = new Mobil("Toyota", 2020);

console.log("Merk:", mobil.merk);
console.log("Tahun:", mobil.tahun);

mobil.merk = "Tesla";
mobil.tahun = 2024

console.log("Merk baru:", mobil.merk);
console.log("Tahun baru:", mobil.tahun);
