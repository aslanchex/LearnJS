/*Функции рекурсивно возвращает каждый эелемент на новой строке*/

function consoleRec(arr, b) {
	var c = arr.shift()
	console.log(c+' '+b+'\b')
	if (arr.length != 0) {
		consoleRec(arr, b)
	}
}

var a = ['I','can','write','on','js']

consoleRec(a, 111)
