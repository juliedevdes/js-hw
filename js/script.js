// -----

// ------ TASK ------

// Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));
// Пиши код выше этой строки
