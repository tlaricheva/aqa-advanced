function countdown(num) {
  console.log(num);

  // Базовый случай — когда рекурсия должна остановиться
  if (num <= 0) {
    return;
  }

  // Рекурсивный вызов
  countdown(num - 1);
}

// Запуск
countdown(5);
