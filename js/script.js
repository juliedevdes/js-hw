// === TASK ==== 
/**
 *   ===  Контекст вызова функции
 * 
 *Внутри функций есть зарезервированное ключевое слово this. Во время исполнения функции, в this записывается ссылка на объект, 
 в контексте которого она была вызвана. Таким образом, в теле функции мы можем получить доступ к свойствам и методам этого объекта.

const bookShelf = {
  authors: ['Бернард Корнуэлл', 'Роберт Шекли'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли']
bookShelf.addAuthor('Ли Танит');
console.log(bookShelf.getAuthors()); // ['Бернард Корнуэлл', 'Роберт Шекли', 'Ли Танит']
Методы getAuthors и addAuthor это функции, которые вызываются в контексте объекта bookShelf. Во время их выполнения в this записывается ссылка на объект bookShelf и мы можем обратиться к его свойствам и методам.

Задание
Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта..*/

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