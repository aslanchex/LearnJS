url = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
let names = new Array(); //список ородов будем загружать сюда
function createlist(url) { // функция подгружает список с сервера
    return new Promise( function(resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            resolve(xhr.response);
            reject();
        };
        xhr.send();

    });
};
createlist(url).then((response) => { // передаем имена городов в массив
    let i = 0;
    for ({name} of response) {
        names[i] = name;
        i++;
    };
});

var input = document.getElementsByTagName('input')[0]; // выбираем наше текстовое поле

let a = false; // вспомогательная переменная

input.oninput = function inp(parent) { // обработка изменений в тесктоом поле
    if (a == true) { // удаляем последние изменения в html
        let del = document.getElementById('list');
        let parent = document.getElementById('parent');
        parent.removeChild(del);
        a = false;
    } else {
        null;
    }

    let text = input.value; // переменная содержит то что в поле на данный момент
    let div = document.createElement('div'); // создаем
    div.id = 'list'; // задаем ид
    for (var i in names) { // перебираем все имена в массиве

        if (text.length == 0) { // ничего не введено
            a = false;
        } else if (names[i].match(text)) { // если введенный текст является подстрокой элемента
            let p = document.createElement('p'); // создаем строку
            p.innerHTML = names[i]; // вставляем название
            div.appendChild(p); // добавляем строку в контейнер
            document.body.appendChild(div); // вставляем контейнер в тело документа
            a = true; // переключаем, чтобы сработало условие в начале фукнции
        }
    }
};
