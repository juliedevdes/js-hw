function getExtremeElements(array) {
    const fistEl = array[0];
    const lastEl = array[array.length - 1];
    return [fistEl, lastEl];

}

const check = getExtremeElements([2, 5, 7]);
console.log(check);

/*Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. 
Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array. */