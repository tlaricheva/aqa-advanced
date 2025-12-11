// Функція, яка приймає два параметри
function divide(numerator, denominator) {

  // Валідація: якщо хоча б один параметр НЕ є числом 
  if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Обидва параметри повинні бути числами");
  }

  // Валідацію: якщо denominator дорівнює 0 
  if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе");
  }

    return numerator / denominator;
}



// ------- ВИКЛИКИ ФУНКЦІЇ З ВИКОРИСТАННЯМ TRY / CATCH / FINALLY -------

// 1) Коректний виклик 
try {
  console.log("Результат:", divide(10, 2)); 
} catch (error) {
  console.log("Помилка:", error.message); 
} finally {
  console.log("Робота завершена");
}



// 2) Виклик з denominator = 0 
try {
  console.log("Результат:", divide(5, 0)); 
} catch (error) {
  console.log("Помилка:", error.message); 
} finally {
  console.log("Робота завершена");
}



// 3) Виклик з некоректним типом 
try {
  console.log("Результат:", divide("hello", 2)); 
} catch (error) {
  console.log("Помилка:", error.message); 
} finally {
  console.log("Робота завершена");
}
