const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
    const fruit = fruits[i]; // Change this line
    console.log(fruit);
}
/*

Итерация по массиву
Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], 
где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

*/