/*

===== ЗАДАНИЕ ======
Задача: чётные числа

Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).*/


function getEvenNumbers(start, end) {
    // Change code below this line

    let evenNumbers = [];
    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    return evenNumbers
        // Change code above this line
}

console.log(getEvenNumbers(2, 45));

// 2 создать переменную для массива четных чисел. ретурнуть ее

// 3 перебрать все числа от начала до конца, добавляя их при этом в массив если % 2 === 0

// 4 вывести массив