function getSubstring(string, length) {
    const substring = (string.slice(string, length)); // Change this line

    return substring;
}
/* Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. 
Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
*/