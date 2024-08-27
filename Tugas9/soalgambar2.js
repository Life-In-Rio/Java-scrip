  class Pesawat {
    constructor(jenis, kecepatan) {
        this._jenis = jenis;
        this._kecepatan = kecepatan;

    }

    terbang() {
        return`${this._jenis} pesawat sedang terbang`;
    }

  }

  class Jet extends Pesawat {
    constructor(jenis, kecepatan, kapasitasbahanbakar) {
        super(jenis, kecepatan);
        this._kapasitasbahanbakar = kapasitasbahanbakar;
    }

    isibahanbakar() {
        return `${this._kapasitasbahanbakar} liter`;
    }
}

let jet1 = new Jet ("boeing", 200, 10);
console.log(jet1.terbang()); 
console.log(jet1.isibahanbakar())   