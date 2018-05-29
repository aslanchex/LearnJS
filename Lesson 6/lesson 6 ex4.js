/* # ДЗ - 4 (со звездочкой)

Создать модуль, который экспортирует функцию `scanDOM`.
`scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:
Тэгов div: 10
Тэгов a: 5
Тэгов span: 10
Текстовых узлов: 100
Элементов с классом c1: 10
Элементов с классом c2: 20

Количеств и название классов/тегов заранее неизвестно. Функция сама должна определить количество и название тегов/классов. */
let docObject = {

};


function scanDOM(html) {

    let parent = document.getElementsByTagName('*');
    //console.log(parent);
    //console.log(document.body);

    function section(value) { //функция провреяет наличие свойства объекта и добавляет либо увеличивает .
        if (value in docObject) {
            docObject[value] ++;

        } else {
            docObject[value] = 1;
        }
    }

    function classlist(list) { // функция определяет наличие классов и добавляет в свойства объекта
        if (list.length != 0) {
            //console.log(list);
            for (let i = 0; i < list.length; i++) {
                section(list[i]);
            }
        }
    }

    for (let i = 0; i < parent.length; i++) {
        section(parent[i].nodeName);
        classlist(parent[i].classList);

    }
    let text = '#text'
    docObject[text] = 0;;
    /*docObject[text] = document.body.getElementsByTagName('*').length + document.head.getElementsByTagName('*').length;*/

    let strhead = document.head.innerHTML.split("\n");
    let strbody = document.body.innerHTML.split("\n");
    docObject[text] += strbody.length  + (strhead.length - 1);

}

scanDOM('html');
console.log(docObject);
