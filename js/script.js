"use strict";

/*====== Общая стоимость товара ======

Задание

Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
 Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.*/


const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
    for (const product of products) { //     { name: 'Radar', price: 1300, quantity: 4 },
        if (product.name === productName) {
            return (product.price * product.quantity)
        }
    }

    return "There is no such a product";

}
console.log(calculateTotalPrice("Droid"));

/*
 *  1 перебрал объкты в массиве
 * 
 *  2 епербрал имена в объектах... 
 * 
 *  3 ... и ЕСЛИ слвпадает с вводимым значением ► 
 * 
 *  4 ► ...выдал значения других свойст объекта умноженые друг на друга
 * 
 */