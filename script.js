//  Дан массив из чисел
// Сделайте из него массив, состоящий из квадратов этих чисел.
// const array = [1, 2, 3, 4, 5];

// function multiply(arr) {
//     return array.map(item => item * item);
// }
// console.log(multiply(array));

// Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)
// ES6:
// const array = [1, 1, 2, 3, 3, 4, 5, 5, 6];

// function findUnique(arr) {
//     return [...new Set(arr)];
// }
// console.log(findUnique(array));

// filter, indexOf:
// const array = [1, 1, 2, 3, 3, 4, 5, 5, 6];

// function findUniqueTwo(arr) {
//     return arr.filter((item, index, arr) => arr.indexOf(item) === index);
// }