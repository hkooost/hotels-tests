// Задача 2. Написать функцию/метод, которая на вход получает массив
// положительных целых чисел произвольной длины.
// Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются
// общими делителями для всех указанных числе. В примере это будет [2, 3, 6]

divSearch = (x) => {
  const array = [];
  const min = Math.min(...x);

  for (let i = 2; i <= min; i++) {
    // Проверка, делится ли каждый элемент массива без остатка
    if (x.every((n) => n % i === 0)) {
      // Затем пушаем полученные делители в массив
      array.push(i);
    }
  }
  return array;
};

console.log(divSearch([42, 12, 18]));
console.log(divSearch([2, 6, 12]));
console.log(divSearch([18, 36, 54]));
console.log(divSearch([333, 999, 2727]));
