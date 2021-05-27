"use strict";

/// ======Задача подсчет свойств====


/* 
Перебери объект apartment используя метод Object.keys() и цикл for...of. 
Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
*/


// const book = {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['историческая проза', 'приключения'],
//     rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значение свойства
//     console.log(book[key]);

const apartment = {
    descr: 'Spacious apartment in the city centre',
    rating: 4,
    price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
console.log(keys)

for (const key of keys) {
    values.push(apartment[key])
}
console.log(values);