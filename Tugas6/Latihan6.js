//no 1
const identitas = ["Abyan", 16, "Bekasi",17];
console.log(identitas[0])
console.log(identitas[2])
console.log(identitas)
// batas

// no 2
identitas[2] = "jakarta";
console.log(identitas)
// batas

// no 3
identitas.splice(1, 1);
console.log(identitas)
// batas

// no 4
const array1 = [1, 2, 3,];
const array2 = [4, 5, 6 ];
const array3 = array1.concat(array2);
console.log(array3)
// batas

// no 5
console.log(identitas.indexOf("jakarta"))
// batas

// no 6 
const number = [34, 7, 23, 32, 5];
number.sort((a, b) => a - b)
console.log(number);
// batas

// no 7
console.log(number.length)
// batas


const identitass = ["Abyan", 16, "Bekasi",];
identitass.splice(1, 1);
delete identitass[0]
console.log(identitass)