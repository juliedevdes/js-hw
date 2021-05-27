"use strict";

/// ======Задача подсчет свойств====


/*
Задание
Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
Используй переменную propCount для хранения количества свойств объекта.

*/

function countProps(object) {
    let propCount = 0;
    // Change code below this line
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            propCount += 1;
        }
    }
    // Change code above this line
    return propCount;
}
console.log(countProps({ name: "Mango", age: 2 }));

/* 
1 перебрать свойства объкта фор ин 

2 поставить условие - если true hasOwnObjects. дейтсвительно собственное свойство или нет

3 если да - добавить в переменную 1

4 вернуть переменную с подсчетом

*/