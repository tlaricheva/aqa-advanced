const radius = 5;
const area = Math.PI * (radius ** 2); 
const roundedArea = Number(area.toFixed(2)); // округлення до 2 знаків після коми

console.log("Radius:", radius);
console.log("Circle area:", roundedArea);