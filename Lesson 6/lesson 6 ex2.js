/* # ДЗ - 2

Создать модуль, который экспортирует функцию `deleteTextNodes`
Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера. */

function deleteTextNodes(container) {
    let selector = document.querySelector(container); // выбыираем элемент
    let allElembycontainer = selector.childNodes; // выбираем все дочерние элементы и узлы
    //console.log(allElembycontainer.length);
    let i = 0;
        for (i; i < allElembycontainer.length; ++i) { // проходим по всем узлам если узел текстовый удаляем с помощью removeChild
            if (allElembycontainer[i].nodeType == 3) {
                selector.removeChild(allElembycontainer[i]);
            }
        }
    return allElembycontainer;
}

console.log(deleteTextNodes('div'));
//export {deleteTextNodes};
