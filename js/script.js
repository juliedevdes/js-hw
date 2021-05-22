/*

===== ЗАДАНИЕ ======
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
*/

function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line

    for (const item of order) {
        total += item;
    }

    // Change code above this line
    return total;
}


console.log(calculateTotalPrice([12, 12]));