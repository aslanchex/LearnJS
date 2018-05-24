/* ДЗ - 1:

написать модуль, который экспортирует аналоги методов для работы с массивами:
forEach, filter, map, slice, reduce, splice  пример:

let array = [1, 2, 3, 4, 5, 6];
forEach(array, item => console.log(item));
let greaterThan4 = filter(array, item => item > 4);
let sqare = map(array, item => item*item);

Описание того, как работают эти методы, есть на Mozilla Developer Network и в бесплатных видеоуроках LoftBlog/LoftSchool.

Реализация функции splice является задачей со звездочкой.
Ее выполнение не обязательно, но желательно.

Внимание:
 в данном задании запрещено использовать встроенные методы для работы с массивами! Разрешено использовать стандартные
операторы 'for/for-in/while/if`' (и т.д.) и свойство 'length'
*/

//export {_forEach, _filter};
var line = '____________________'
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
var arr3 = [1, 2, 3, 4, 5];

function _forEach(arr) {
    for (var i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

function _filter(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 2) {
            console.log(arr[i]);
        } else {
            continue;
        }

    }
}

function _map(arr) {

    var j = [];
    for (var i=0; i < arr.length; i++) {
        j[i] = arr[i] * arr[i]
    }
    console.log(j);
}

function _slice(arr, x, y) { //arr - массив, x - индекс первого элемента, y - индекс конечного элемента.
    var count = 0;
    var j = [];
    var i = x;
    while (arr[i] != arr[y]) {
        j[count] = arr[i];
        i = ++i;
        count = ++count;
    }
    console.log(j);
}

function _reduce(arr, x=0) { //arr - массив, x - initialValue
    var sum=0;
    var i = x;
    for (; i < arr.length; i++) {
        if (i == x) {
            sum = arr[i];
            continue;
        } else {
            sum = sum + arr[i]
        }
    }
    console.log(sum);
}

function _splice(arr, x, y) { //arr - массив, x - индекс первого элемента, y - количество элементов
    if (y == 0) { //  если количесвто элементов равно 0 ничего не происходит
        NaN;
    } else {
        for (var i = x; i < x+y; i++) {
            arr[i] = arguments[i];
        }
    }
    console.log(arr);
}
_forEach(arr2);
console.log(line);
_filter(arr2);
console.log(line);
_map(arr2);
console.log(line);
_slice(arr2, 2, -1);
console.log(line);
_reduce(arr2, 0);
console.log(line);
_reduce(arr3, 0);
console.log(line);
_splice(arr2, 3, 2, 'Arr', 'Dfa');
