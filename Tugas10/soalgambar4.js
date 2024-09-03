function calculateTax(price, location) {
    if (location == "Jakarta") {
      return price * 0.1;
    }
    if (location == "Bandung") {
      return price * 0.05;
    }
  }
  
  var finalPrice = calculateTax(10000, "Jakarta");
  console.log(finalPrice);
  
  function displayResult(finalPrice, paymentStatus) {
    if (paymentStatus == "paid") {
      return `Payment successful! Total amount:` + finalPrice;
    } else {
      return `Payment pending`;
    }
  }
  
  console.log(displayResult(finalPrice, "paid"));