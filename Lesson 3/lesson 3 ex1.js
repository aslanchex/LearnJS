/*

ДЗ 3 (со звездочкой)
Написать функцию 'calculator' (в виде модуля), которая имеет один параметр - 'firstNumber'
'firstNumber' - это число, с которым будут производиться действия
Функция 'calculator' должна возвращать объект, у которого должно быть несколько функций.
Каждая из этих функций принимает неограниченное количество аргументов и производит какие-то арифметические операции с этими аргументами и тем числом, которое было передано в 'calculator' и возвращает результат:
- 'sum' - складывает 'firstNumber' с переданным аргументами
- 'dif' - вычитает из 'firstNumber' переданные аргументы
- 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции делится на второй переданный аргумент (если он есть) и так далее
- 'mul' - умножает 'firstNumber' на первый переданный аргумент. Результат этой операции умножается на второй переданный аргумент (если он есть) и так далее.
Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю

*/

function calculator(firstNumber) {
	var val = firstNumber

	var obj = {
		sum: function() {
			var x = val;
			for (var i = 0; i < arguments.length; i++) {
				x = x + arguments[i];
			}
			return x;
		},
		dif: function() {
			var x = val;
			for (var i = 0; i < arguments.length; i++) {
				x = x - arguments[i];
			}
			return x;
		},
		div: function() {
			var x = val;
			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i] != 0) {
					x = x / arguments[i];
				} else {
					console.log("ZERO!")
				}
			}
			return x;
		},
		mul: function() {
			var x = val;
			for (var i = 0; i < arguments.length; i++) {
				x = x * arguments[i];
			}
			return x;
		}
	}
	return obj;
}

var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2, 0)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400
