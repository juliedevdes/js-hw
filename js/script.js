function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    const allArray = firstArray.concat(secondArray);
    if (allArray.length > maxLength) {
        return allArray.slice(0, maxLength);;
    } else {
        return allArray;
    }
    // Change code above this line
}
const result = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 2);
console.log(result);

/*



Задача: композиция массивов
Задание
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. 
Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. 
В противном случае функция должна вернуть новый массив целиком.


функ :

1- объединяет 1 2 ряда

2 если ряд больше максленф - обрезает
*/