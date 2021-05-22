function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (let i = 0; i < order.length; i += 1) {
        total = total + order[i];
    }

    /* for (const item of order) {
        total += item;
    }*/

    // Change code above this line
    return total;
}
console.log(calculateTotalPrice([70, 40, 60]));


/*
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов.
 Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

*/