"use strict";

/** =====Задача=====
Функция addOverNum() считает сумму всех аргументов. 
Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.*/



function addOverNum(number, ...args) {
    let total = 0;

    for (const arg of args) {
        if (arg > number) {
            total += arg;
        }
    }
    return total;
    // Change code above this line
}