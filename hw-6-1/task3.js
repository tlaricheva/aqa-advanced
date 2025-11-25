function checkOrder(available, ordered) {
  if (ordered > available) {
    return "Your order is too large, we don’t have enough goods.";
  } else if (ordered === 0) {
    return "Your order is empty";
  } else {
    return "Your order is accepted";
  }
}

console.log(checkOrder(100, 120)); // too large
console.log(checkOrder(50, 0));    // empty
console.log(checkOrder(80, 20));   // accepted
