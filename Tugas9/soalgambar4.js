class Kendaraan {
    constructor(kecepatan){
        this._kecepatan = kecepatan;

       this.getKecepatan = function (){
        return this._kecepatan
       }
        
       this.setKecepatan = function (kecepatan){
        this._kecepatan = kecepatan
       }


    }
}

let kendaraan1 = new Kendaraan(100);
console.log(kendaraan1.getKecepatan())

let kendaraan2 = new Kendaraan(-50);
console.log(kendaraan2.getKecepatan())
