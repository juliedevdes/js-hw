function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = (password === SAVED_PASSWORD);

    // Change code above this line
    return isMatch;
}
/*Операторы сравнения === и !==
«Нестрогие» операторы == и != выполняют преобразование типов сравниваемых значений, что может привести к ошибкам, особенно у начинающих.


Поэтому для проверки равенства или неравенства двух значений используются операторы
 === (строгое равенство) и
 !== (строгое неравенство), которые не выполняют приведение типов операндов.*/