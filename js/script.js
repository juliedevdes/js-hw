/*

==== ЗАДАНИЕ ====
Задача: функция includes()

Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
*/

function includes(array, value) {
    // Change code below this line
    for (const item of array)
        if (item === value) {
            return true;
        }
    return false;
    // Change code above this line
}
console.log(includes([12, 13, 15, 19, 78], 12));

// 1 создать переменную которая будет хранить тру или фолз и возвращать в конце функции ее. дефолт = фолз

// 2 цикл фороф - брать каждую штучку из array и сравнивать с value. если да, то прерывать и записывать в переменную тру

// 3 вывести логом