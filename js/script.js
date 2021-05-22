/*

===== ЗАДАНИЕ ======
Зачада: фильтрация массива чисел 2.0
Задание
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.*/


/*старый вариант
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}



*/


function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];
    for (const number of numbers) {

        if (number > value) {
            filteredNumbers.push(number);
        }
    }

    return filteredNumbers;
    // Change code above this line
}


console.log(filterArray([12, 12], 10));