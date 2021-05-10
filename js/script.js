function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    if (password === null) { // Change this line
        message = 'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { // Change this line
        message = 'Welcome!';
    } else {
        message = 'Access denied, wrong password!';
    }

    return message;
}

/* Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.

let cost;
const subscription = "pro";


Блок else...if позволяет добавить после else еще один оператор if с условием. 
В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost); // 500
*/