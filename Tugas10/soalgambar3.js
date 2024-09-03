function checkStock(requestedQuantity, item) {
    var Stock = 50;
  
    if (requestedQuantity > Stock) {
      return `Stock insufficient for ${item}.`;
    } else {
      return `Stock sufficient for ${item}.`;
    }
  }
  
  console.log(checkStock(60, "Laptop"));
  console.log(checkStock(50, "Laptop"));