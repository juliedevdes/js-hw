function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
    const totalPrice = (pricePerDroid * orderedQuantity + deliveryFee);
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

    // Change code above this line
    return message;
}
/* Оператор RETURN WTF ?????

Оператор return используется для передачи значения из тела функции во внешний код. 
Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), 
и возвращает указанное значение в то место кода, где функция была вызвана.

Оператор return без явно указанного значения возвращает специальное значение undefined. При отсутствии return в теле функции, она все равно вернёт undefined.
*/