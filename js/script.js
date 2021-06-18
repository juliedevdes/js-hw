// -----

// ------ TASK ------

// Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.
// Массив друзей пользователя хранится в свойстве friends.

// Пиши код ниже этой строки
const getFriends = (users) => {
  const userAllFriends = users.flatMap((user) => user.friends);
  return userAllFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
};
// Пиши код выше этой строки
// const uniqueGenres = allGenres.filter(
//     (book, index, array) => array.indexOf(book) === index
//   );
