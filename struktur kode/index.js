var hasil_perkalian = 6 * 6;
console.log(hasil_perkalian);
//soal tugas andi//

//mulai buku2//
var buku = "fiqih";

var harga = 25000;

var jumlahbeli = 10;

var total = harga * jumlahbeli;
console.log("ini buku " + buku + " dengan harga " + total);

var Buku2 = "siroh";

var Harga2 = 40000;

var jumlahbeli = 15;

var discount = 0.5;

var totaldicount = discount * Harga2;
console.log(totaldicount);

var Totalharga = jumlahbeli * Harga2;
console.log("ini buku " + Buku2 + " dengan harga " + Totalharga);

var totalhargasetelahdiscount = Totalharga * discount;
console.log("harga setelah discount " + totalhargasetelahdiscount);
//batas tugas//

//mulai buku3//
var buku4 = "adab";

var harga4 = 50000;

var jumlahbeli4 = 20;
var total4 = harga4 * jumlahbeli4;
console.log("ini buku " + buku4 + " dengan harga " + total4);

var discount3 = 0.3;
var totaldiscounts = total4 * discount3;
var totalhargasetelahdiscount2 = total4 - totaldiscounts;
console.log("harga setelah discount " + totalhargasetelahdiscount2);

console.log(
  "buku " +
    buku4 +
    " dengan harga " +
    totalhargasetelahdiscount2 +
    ", buku " +
    buku +
    " dengan harga " +
    total +
    ", buku " +
    Buku2 +
    " dengan harga " +
    totalhargasetelahdiscount
);

var totalkeseluruhan =
  totalhargasetelahdiscount2 + total + totalhargasetelahdiscount;
console.log("total harga keseluruhan adalah " + totalkeseluruhan);


var ruang1 = 10
var ruang2 = 11
var perbandingan = ruang1<ruang2
console.log(perbandingan)