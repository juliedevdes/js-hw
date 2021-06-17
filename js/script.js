// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
//  а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  let changedEven = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      changedEven.push(number + value);
    } else {
      changedEven.push(number);
    }
  });
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] % 2 === 0) {
  //     changedEven.push(numbers[i] + value);
  //   } else {
  //     changedEven.push(numbers[i]);
  //   }
  // }
  return changedEven;
  // Пиши код выше этой строки
}
console.log(changeEven([1, 2, 3, 4, 5], 10));
// ` возвращает новый массив `[(1, 12, 3, 14, 5)]
