// -----

// ------ TASK ------
// Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей
// (свойство friends) всех пользователей из массива users. хранят пользователи из массива users.

// Пиши код ниже этой строки
const getTotalFriendCount = (users) =>
  users.reduce((acc, user) => user.friends.length + acc, 0);
// Пиши код выше этой строки
