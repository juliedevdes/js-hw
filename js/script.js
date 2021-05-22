function calculateTotal(number) {
    // Change code below this line
    let sum = 0;
    for (let i = 1; i <= number; i += 1) {
        sum += i;
    }
    return sum;
    // Change code above this line
}

const result = calculateTotal(20);
console.log(result);
/*

Напиши функцию calculateTotal(number), которая принимает целое число (параметр number)
и возвращает сумму всех целых чисел от единицы и до этого числа. 

Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

*/