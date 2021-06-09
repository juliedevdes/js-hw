// === TASK ==== 
/**
 * 
 * С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

Добавь методы на прототип:

getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
 * 
 * function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;

  
const messages = [];
for (let i = 0; i < orders.length; i += 1) {
    messages.push(composeMessage.call(orders[i], i + 1));
}
 * 
 */


function Storage(items) { this.items = items };
Storage.prototype.getItems = function() { return this.items; };

Storage.prototype.addItem = function(newItem) { this.items.push(newItem); };

Storage.prototype.removeItem = function(item) {
    for (let i = 0; i < this.items.length; i += 1) {
        if (this.items[i] === item) {
            this.items.splice(i, 1);
        }
    }
};


// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]