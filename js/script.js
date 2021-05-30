"use strict";

/** =====Задача=====
Задание
Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.*/
// Change code below this line
function add(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
    // Change code above this line
}