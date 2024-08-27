class Karyawan {
    constructor(nama, gaji) {
        this._nama = nama;
        this._gaji = gaji;
    }

   
    get nama() {
        return this._nama;
    }

   
    set nama(nama) {
        this._nama = nama;
    }

  
    get gaji() {
        return this._gaji;
    }

 
    set gaji(gaji) {
        this._gaji = gaji;
    }
}


class Manajer extends Karyawan {
    constructor(nama, gaji) {
        super(nama, gaji);
    }

   
    buatLaporan() {
        return `Laporan dari Manajer Nama: ${this.nama} Gaji ${this.gaji}`;
    }
}


let manajer1 = new Manajer("Abyan", 10000);
console.log(manajer1.buatLaporan());


manajer1.nama = "Eshan";
manajer1.gaji = 12000;
console.log(manajer1.buatLaporan());
