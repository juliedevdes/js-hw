function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line

    if (password === null) {
        message = "Canceled by user!";
    } else if (password === ADMIN_PASSWORD) {
        message = "Welcome!";
    } else {
        message = "Access denied, wrong password!";
    }

    // Change code above this line
    return message;
}
/* ======answer======= */

switch (password) {
    case ADMIN_PASSWORD:
        message = "Welcome!";
        break;

    case null:
        message = "Canceled by user!"
        break;

    default:
        message = "Access denied, wrong password!";


}
/* Инструкция switch c блоком default

Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. 
Для этого после всех блоков case добавляется блок default.
Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).
*/