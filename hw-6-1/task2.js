function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("25 years old:", isAdult(25)); 
console.log("15 years old:", isAdult(15)); 
