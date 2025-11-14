const radius = 8;
const height = 15
const volume = Math.PI * (radius **2) * height;
const roundedVolume = Number(volume.toFixed(2));
console.log("Radius:", radius);
console.log("Height", height);
console.log("Cylinder volume:", roundedVolume);