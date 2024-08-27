class Karyawan {
    constructor(nama, gaji, jaabtan){
        this._nama = nama;
        this._gaji = gaji;
        this._jabatan = jaabtan;

     this.getNama = function (){
        return this._nama
     }

     this.getGaji = function (){
        return this._gaji
     }

     this.getJabatan = function (){
        return this._jabatan
     }

     this.setNama = function (nama){
        this._nama = nama
     }

     this.setGaji = function (gaji){
        this._gaji = gaji
     }

     this.setJabatan = function (jabatan){
        this._jabatan = jabatan
     }
    
    }
}

class Manager extends Karyawan {
    constructor(nama, gaji, jaabtan){
        super(nama, gaji, jaabtan);
    }
 beriTunjangan(){
   var gaji =  this._gaji * 0.05
   return `${this._nama} tunjangannya ${gaji}`
 }  
}

let manager1 = new Manager("Abyan", 5000000, "Manager");
console.log(manager1.beriTunjangan())