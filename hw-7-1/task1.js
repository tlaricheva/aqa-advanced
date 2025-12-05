function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    // якщо передане число парне
    evenCallback();
  } else {
    // якщо передане число непарне
    oddCallback();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(4, handleEven, handleOdd);  // -> number is even
handleNum(7, handleEven, handleOdd);  // -> number is odd
