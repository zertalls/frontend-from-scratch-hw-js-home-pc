/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
const FACTORIAL_NUMBER = 10;
let factorial, currIteration = 1, currValue = 1;

while (currIteration <= FACTORIAL_NUMBER) {
  currValue *= currIteration;
  currIteration++;
}

factorial = currValue;

