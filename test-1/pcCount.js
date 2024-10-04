// Задача 1. Разработайте функцию, которая принимает целое число в качестве
// аргумента и возвращает строку, содержащую это число и слово "компьютер" в
// нужном склонении по падежам в зависимости от числа. Например, при вводе
// числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41
// компьютер", а для числа 1048 — "1048 компьютеров".

pcount = (num) => {
  const pc = " компьютер";

  if (num >= 11 && num <= 19) {
    return num + pc + "ов";
  } else if (num % 10 >= 2 && num % 10 <= 4) {
    return num + pc + "а";
  } else if (num == 1 || num % 10 == 1) {
    return num + pc;
  } else return num + pc + "ов";
};

console.log(pcount(41));
console.log(pcount(25));
console.log(pcount(1048));
console.log(pcount(1));
console.log(pcount(4));
console.log(pcount(13));
console.log(pcount(22));
