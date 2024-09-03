function calculatePrice(quantity, pricePerItem, isMember) {
    if (isMember === true) {
      return quantity * pricePerItem - quantity * pricePerItem * 0.15;
    } else {
      return quantity * pricePerItem;
    }
  }
  
  console.log(calculatePrice(3, 15000, true));
  console.log(calculatePrice(3, 15000, false));
  
  function confirmPurchase(isConfirmed, totalPrice) {
    if (isConfirmed === true) {
      return `Purchase confirmed with total price ${totalPrice}.`;
    } else {
      return `Purchase not confirmed.`;
    }
  }
  
  console.log(confirmPurchase(true, 15000));
  console.log(confirmPurchase(false, 15000));