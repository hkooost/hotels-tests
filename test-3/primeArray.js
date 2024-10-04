// Задание 2. Написать функцию/метод, которая возвращает массив простых чисел
// в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
// Например, на вход переданы 2 числа: от 11 до 20 (диапазон считается включая
// граничные значения).
// На выходе программа должна выдать [11, 13 , 17, 19]

primeArray = (min, max) => {
  let primeArr = [];

  // Функция поиска простых чисел
  primeSearch = (x) => {
    // Оптимизированный цикл до квадратного корня
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        return 0;
      }
    }
    return 1;
  };
  primePush = (min, max) => {
    for (let i = min; i <= max; i++) {
      if (primeSearch(i)) {
        primeArr.push(i);
      }
    }
  };
  primePush(min, max);
  return primeArr;
}

console.log(primeArray(11, 20));
console.log(primeArray(36, 42));
console.log(primeArray(1, 100));
