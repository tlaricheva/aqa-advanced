const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

//  Створюємо копію масиву (щоб не змінювати оригінал)
const sortedList = [...numbersList];

// Сортуємо копію від меншого до більшого
sortedList.sort((a, b) => a - b);

console.log("Оригінальний масив:", numbersList);
console.log("Відсортований масив:", sortedList);
