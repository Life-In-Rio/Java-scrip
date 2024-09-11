class akunBank {
  constructor(saldo, setoran) {
    var _saldo = saldo;
    var _setoran = setoran;
    this.setSaldo = function (saldo) {
      _saldo = saldo;
    };

    this.setSetoran = function (setoran) {
      _setoran = setoran;
    };

    this.getSetoran = function () {
      return _setoran;
    };
    this.getSaldo = function () {
      if (_saldo < 0) {
        return (saldo = Null);
      } else {
        return (_saldo = saldo + setoran);
      }
      return _saldo;
    };
  }
}

let akun1 = new akunBank(2700, 5000);
console.log(akun1.getSaldo());


