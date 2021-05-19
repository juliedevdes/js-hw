function slugify(title) {
    // Change code below this line
    const normtitle = title.toLowerCase();
    const titlesp = normtitle.split(" ");
    const slug = normtitle.join('-');
    return slug;
    // Change code above this line
}


const result = slugify("I want sleep");

console.log(result);
/*Задача: генератор slug
Задание
Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире*/