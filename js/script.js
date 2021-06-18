//Задание
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
//возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter((user) => user.age <= maxAge && user.age >= minAge);
// Пиши код выше этой строки
