var nilai = 80;
var kehadiran = 20;
var totalpertemuan = 25;

var lulus = (kehadiran / totalpertemuan) * 100;

if (nilai >= 85) {
    if (lulus >= 75) console.log("nilai anda A : lulus");
   
    else console.log("nilai anda A : tidak lulus");

} else if (nilai >= 70) {
  if (lulus >= 75) console.log("nilai anda B : lulus");
  
  else console.log("nilai anda b : tidak lulus");

}
 else if (nilai >= 50) {
  if (lulus >= 75) console.log("nilai anda c : lulus");
  
  else console.log("nilai anda c : tidak lulus");

}
 else if (nilai < 50) {
 console.log("anda tidak lulus");
}
