function registeruser (nama, usertype) {
    if (usertype === "VIP"){
        return `welcome VIP ${nama}!`
    }
    else {
    return `welcome ${nama}!`
    }
}
console.log(registeruser("Nina", "VIP"));

function applyDiscount (usertype, purchaseAmount) {
 if (usertype === "VIP"){
    var discount = 0.2;
 }
 else {
    var discount = 0.1;
 }
 return purchaseAmount - purchaseAmount * discount;
}
console.log(applyDiscount("VIP", 200))
console.log(applyDiscount("NON VIP", 100));