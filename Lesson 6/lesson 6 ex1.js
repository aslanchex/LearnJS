/* # ДЗ - 1

Создать модуль, который экспортирует функцию `prepend`
prepend имеет два параметра, в которые нужно передать элементы
Задача функции - вставить второй элемент в начало первого. Например:
`prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.*/


function prepend(container, newElement) {
    let section = document.querySelector(container); // находим элемент с названием container
    let parent = section.parentNode; // берем родителя элемента
    //console.log(parent);
    let newEl = document.createElement(newElement); // создаем новый элемент с переданным newElement
    parent.insertBefore(newEl, section); // вставляем новый элемент перед заданным 
}

prepend('div', 'ul');
//export {prepend};
