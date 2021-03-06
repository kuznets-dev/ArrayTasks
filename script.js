//  Дан массив из чисел
// Сделайте из него массив, состоящий из квадратов этих чисел.
const array = [1, 2, 3, 4, 5];

function multiply(arr) {
    return array.map(item => item * item);
}
console.log(multiply(array));

// Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)
// ES6:
const array = [1, 1, 2, 3, 3, 4, 5, 5, 6];

function findUnique(arr) {
    return [...new Set(arr)];
}
console.log(findUnique(array));

// filter, indexOf:
const array = [1, 1, 2, 3, 3, 4, 5, 5, 6];

function findUniqueTwo(arr) {
    return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}

console.log(findUniqueTwo(array));

// Проверьте то, что все элементы в массиве больше нуля.
const arrayOne = [-1, 1, 3, 8, 0, -30, -15];

function findNum(arr) {
    return arr.every(item => item >= 0);
}
console.log(findNum(arrayOne)); // false

const arrayTwo = [1, 3, 8, 0];

function findNum(arr) {
    return arr.every(item => item >= 0);
}

console.log(findNum(arrayTwo)); // true

// Оставьте в нем только отрицательные числа.
const array = [-1, 1, 3, 8, 0, -30, -15];

function findNegative(arr) {
    return arr.filter(item => item < 0);
}
console.log(findNegative(array));

// Найдите сумму этих чисел.
const array = [1, 2, 3, 4, 5];

function sum(arr) {
    return arr.reduce((accum, item) => {return accum += item});
}
console.log(sum(array));

// Дан массив, в нем могут быть обычные элементы и подмассивы(например [1, 2, [3, 4], 5, {a: 7}]). Оставьте в нем только подмассивы.
const array = [1, 2, [3, 4], 5, {a: 7}];

function findSubArr(arr) {
    return arr.filter(item => Array.isArray(item));
}
console.log(findSubArr(array));

// Верните количество слов в строке, длина которых больше 4 символов.

const str = 'apple orange red blue';

function findLenght(string) {
    return string.split(' ').filter(item => item.length > 4);
}
console.log(findLenght(str));

// Если в строке имеется шестизначное число(ни больше, ни меньше) - верните его, как результат функции
const str = 'adad adadad fjfjfj 555 3333 666666';
const regExp = /\b\d{6}\b/g;

function findNumber(string, reg) {
    return string.match(reg);
}

console.log(findNumber(str, regExp));

const str = 'abcd efasd523asf aaa123456asdf';
const regExp = /(?<!\d)\d{6}(?!\d)/g;

function findNumByReg(string, reg) {
    return string.match(reg);
}

console.log(findNumByReg(str, regExp));