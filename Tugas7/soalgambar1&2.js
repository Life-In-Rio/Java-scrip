// soal no 1

const Person = {
  name: "Abyan",
  age: 16,
  address: {
    city: "Bekasi",
    country: "Indonesia",
  },
};
console.log(Person.address.country);

//batas

// soal no 2
const obj = {
  key: "abyan",
  umur: 16,
  alamat: {
    kota: "bekasi",
  },
};
console.log(obj.key);
console.log(obj["key"]);

obj.umur = obj.umur + 5;
console.log(obj.umur);

// batas

// soal no 3
delete obj.kota;
console.log(obj.kota);

// batas

// // soal no 4
const { name, age } = Person;
console.log(name, age);

// batas

// soal no 5
const { name: username, age: userage } = Person;
console.log(username, userage);

// batas
