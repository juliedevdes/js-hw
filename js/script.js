function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
    return result;
}

/*


Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. 
Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".


*/