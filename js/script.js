function makeStringFromArray(array, delimeter) {
    let string;
    // Change code below this line


    string = array.join(delimeter);
    // Change code above this line
    return string;
}
/*Метод массива join()
Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing' */