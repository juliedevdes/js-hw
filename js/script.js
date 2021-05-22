/*

Задача: поиск самого длинного слова
Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string)
 
и возвращает самое длинное слово в этой строке.

*/

function findLongestWord(string) {
    const arrayString = string.split(" ");
    let longestWord = arrayString[0];
    for (let i = 0; i < arrayString.length; i += 1) {
        if (longestWord.length < arrayString[i].length) {
            longestWord = arrayString[i];
        }
    }

    return longestWord;

}
console.log(findLongestWord('Js is awsome'));

// 1 разделить string на слова отдельные (" ") слова - const arrayString = string.split(" ");

// 2создать перемую логест ворд - let longestWord = arrayString[0]; будет возможно перезаписана(сначала в ней лежит часть массива с идентификатороом 0)

// 3 взять длину каждой чати массива(каждого слова) - через .length


// 4 сравнить ее с длиной следующей части массива и если он а больше - перезаписать переменную 
//-  longestWord.length(длина текущего слова в переменной) < arrayString[i].length(длина другого, по очереди всех в массиве)      
//◄ запихали это в if  / если true - то longestWord = arrayString[i]; перезаписали переменную


// 5 повторить столько раз, сколько длина массива - (let i = 0; i < arrayString.length; i += 1)

// 6 вернуть эту переменную логест ворд   -  return longestWord;