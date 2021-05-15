/*function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is placed, the manager will contact you";
  }

  // Change code above this line
  return message;
}
*/



function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    message = ordered <= available ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
    // Change code above this line
    return message;
}

/* Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

*/