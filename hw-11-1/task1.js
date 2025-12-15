function printAfterDelay(text, ms) {
  setTimeout(()=> {
    console.log(text)
  }, ms);
}


console.log("Start");
printAfterDelay("Hello after 1500ms", 1500);
console.log("End");
