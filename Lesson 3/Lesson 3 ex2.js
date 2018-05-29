/*

 ДЗ №2;

 Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'source' и 'filterFn'
 'source' - массив
 'filterFn' - фильтрующая функция
 Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
 Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'

*/

function issomeTrue(source, filterFn) {
	var i;
	var bool = false;
	for (i=0; i < source.length; i++)
		if (filterFn(source[i]) == true) {
			bool = true;
			break;
		}
	return bool;
}

var isNumber = function(val) {
	return typeof val === 'number';
}

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

console.log(issomeTrue(allNumbers, isNumber)); //вернет true
console.log(issomeTrue(someNumbers, isNumber)); //вернет false
console.log(issomeTrue(noNumbers, isNumber)); //вернет false
