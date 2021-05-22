/*

===== ЗАДАНИЕ ======

Задача: фильтрация массива чисел

Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers)
и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
*/

function filterArray(numbers, value) {
    // Change code below this line
    let filteredArray = [];
    for (item of numbers) {
        if (item > value) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
    // Change code above this line
}

console.log(filterArray([8, 25, 85, 66, 3, 7], 19));

// 1 cоздать переменную которую будет возвращать функция - там будет обновленный массив

// 2 перебрать numbers циклом все по очереди

// 3 сравнить на каждой итерации значение части массива с value

// 4 создать условие в теле цикла - если больше value, то добавить в обновленный массив