 class Akunbank {
  constructor(saldo, setor){
    var _saldo = saldo; 
    var _setor = setor; 
   
    this.getSaldo = function () {
      return _saldo;
    };


    this.setSaldo = function (jumlah) {
      _saldo += jumlah; 

      if (_saldo < 0) {
        _saldo = 0;
      }
    };

    
    this.setor = function (jumlah) {
      if (jumlah > 0) {
        _saldo += jumlah;
      }
    };

  }
}
let akunbank1 = new Akunbank(150, 0);
akunbank1.setSaldo(-40); 
console.log(akunbank1.getSaldo()); 

akunbank1.setor(70); 
console.log(akunbank1.getSaldo()); 


