function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line

    message = message.split(" ");
    return message.length * pricePerWord;
    // Change code above this line
}
const result = calculateEngravingPrice("JavaScript is in my blood", 10);

console.log(result);

/*Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке. */