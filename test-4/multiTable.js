// Задача 4. Написать метод, который в консоль выводит таблицу умножения. На
// вход метод получает число, до которого выводит таблицу умножения.

multiTable = (tableSize) => {
  let multiply = "   ";
  for (let i = 0; i <= tableSize; i++) {
    for (let j = 0; j <= tableSize; j++) {
      if (i == 0 && j > 0) {
        multiply += j + "  ";
      } else if (i > 0 && j == 0) {
        multiply += i + " ";
      } else if (i > 0 && j > 0) {
        multiply += (i * j + " ").padStart(3);
      }
    }
    multiply += "\n";
  }
  return multiply;
};

console.log(multiTable(9));
