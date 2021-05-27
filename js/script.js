"use strict";

/// ======Задача подсчет свойств 2====


// Задача. Подсчёт свойств 2.0
// Задание
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

function countProps(object) {
    // Change code below this line
    let propCount = Object.keys(object);
    return propCount.length;
    // Change code above this line
}

console.log(countProps({ name: 'GAry', age: 12, booklist: { rating: 5, home: 'Los Angeles' } })); //3

//получается, Object.keys(object) сразу берет только hasOwnProperties = true///&&