"use strict";

/*====== Деструктуризация в циклах  ======




// const books = [{
//         title: "Последнее королевство",
//         author: "Бернард Корнуэлл",
//         rating: 8.38,
//     },
//     {
//         title: "На берегу спокойных вод",
//         author: "Роберт Шекли",
//         rating: 8.51,
//     },
// ];

// for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
// }


//========== task
/*const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
}


▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

 */


const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb }
    of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
}