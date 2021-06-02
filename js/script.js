// === TASK ==== 
/**
 *   ===  
 * Задача. Аккаунт пользователя
Задание
Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. 
Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй..*/

const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
        for (let pizza of this.pizzas) {
            if (pizza === pizzaName) {
                return onSuccess(pizza)
            }
        }
        return onError((`В ассортименте нет пиццы с названием ${pizzaName}.`))
    }
};
// Пиши код выше этой строки
// Колбэк для onSuccess
function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}
// Колбэк для onError
function onOrderError(error) {
    return `Ошибка! ${error}`;
}
// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);