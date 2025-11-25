function rectangleAreaDeclaration(width, height) {
  return width * height;
}

console.log("Declaration:", rectangleAreaDeclaration(5, 10));

const rectangleAreaExpression = function (width, height) {
  return width * height;
};

console.log("Expression:", rectangleAreaExpression(5, 10));

const rectangleAreaArrow = (width, height) => {
  return width * height;
};

console.log("Arrow:", rectangleAreaArrow(5, 10));
