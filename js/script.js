"use strict";

/*====== Коллекция значений свойства ======

Задание

Напиши функцию getAllPropValues(propName) которая :
►  принимает один параметр propName - имя (ключ) свойства. 
►  должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
►  eсли в объектах нет свойства с таким именем, функция должна вернуть пустой массив.*/


const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];


/// ===== РЕШЕНИЕ #1 =======
// function getAllPropValues(propName) {
//     const array = [];
//     for (const product of products) { //1 перебираем объекты, как частичка массива. product = { name: 'Radar', price: 1300, quantity: 4 }
//         const keys = Object.keys(product); // 2 делаем массив с ключей всех объктов в массиве, названий свойст
//         //   console.log(keys);

//         if (keys.includes(propName)) { // 3 спрашиваем есть ли в массиве свойст запрашиваемое
//             array.push(product[propName]); // 4 пушим значение в новый массив если да
//         }
//     }
//     return array; // 5 возвращаем новый массив
// }

// ====== решение №2, покороче
function getAllPropValues(propName) {
    const propValues = []; // 1 массив, который будем возвращать
    for (const product of products) { // 2 перебираем объкты в массиве
        for (const key in product) { // 3 перебираем свойтства в объектах
            if (key == propName) { // 4 условие если свойство = задаваемое значение
                propValues.push(product[propName]); /// 5 .. то пушим в новый массив
            }
        }
    }
    return propValues;
}



console.log(getAllPropValues("price"));
console.log(getAllPropValues("тфьу"));
console.log(getAllPropValues("name"));



// const object = {
//     name: 12,
//     age: 13,
// };

// for (const key in object) {
//     console.log(object['name']);


// }