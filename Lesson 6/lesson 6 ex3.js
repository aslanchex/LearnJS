/* # ДЗ - 3(со звездочкой)
Реалзиовать функцию, описанную в ДЗ 2, рекурсивно */
function deleteTextNodes(container) {

    let selector = document.querySelector(container); // выбыираем элемент
    let allElembycontainer = selector.childNodes; // выбираем все дочерние элементы и узлы
    //console.log(allElembycontainer.length);
    let i = 0;
        for (i; i < allElembycontainer.length; i++) { // проходим по всем узлам если узел текстовый удаляем с помощью removeChild
            if (allElembycontainer[i].nodeType == 3) {
                selector.removeChild(allElembycontainer[i]);
            } else {
                let child = allElembycontainer[i];
                deleteTextNodes(child);
            }
        }
    return allElembycontainer;
}

console.log(deleteTextNodes('div'));
