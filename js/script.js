"use strict";

/** Задача. Получаем все зелья
Задача. Расширяем инвентарь
Задание
Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

{
    name: "Dragon breath",
    price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
//41

/*
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

*/


const atTheOldToad = {
    potions: [
        { name: 'Speed potion', price: 460 },
        { name: 'Dragon breath', price: 780 },
        { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
        return this.potions;
    },
    addPotion(potionName) {
        const { potions } = this;
        const { name } = potionName;
        for (let i = 0; i < potions.length; i += 1) {
            if (potions[i].name === name) {
                return `Potion ${name} is already equipped!`;
            }
            potions.push(potionName);
        }
    },
    removePotion(potionName) {
        const { potions } = this;
        for (let i = 0; i < potions.length; i += 1) {
            if (potions[i].name === potionName) {
                potions.splice(i, 1);
                return potions;
            }
        }
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {
        const { potions } = this;
        for (let i = 0; i < potions.length; i += 1) {
            if (potions[i].name === oldName) {
                potions[i].name = newName;
                return potions;
            }
        }
        return `Potion ${oldName} is not in inventory!`;
    },
    // Change code above this line
};

atTheOldToad.addPotion({ name: 'Grey Thumb', price: 500 });

console.log(atTheOldToad.potions);
// const ob = {
//     tool: [
//         { n: 1, j: 3 },
//         { n: 1, j: 3 },
//         { n: 1, j: 3 },
//     ],
//     returnP() {
//         const { tool } = this;
//         console.log(tool);
//     },
// }

// ob.returnP();