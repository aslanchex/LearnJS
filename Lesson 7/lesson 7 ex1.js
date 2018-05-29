/* Cоздать страницу с кнопкой. При клике на кнопку, на странице должен создаваться div произвольных размеров, в произвольном месте.
Цвет фона div'а должен быть каждый раз случайным.
Созданные div'ы можно перетаскивать мышкой (drag & drop)
*/
function random_bg_color() { // выбираем произвольный цвет и вставляем в фон div-а
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return bgColor = "RGB(" + x + "," + y + "," + z + ")";
}

function random_size() { // выбираем произвольный размер div-а
    var x = Math.floor(Math.random()*50);
    return size = x+'px';
}

function random_place(div) {// вставляем div  в произвольное место

    let section = document.body.children;
    let x = Math.floor(Math.random()*50);
    let y = Math.floor(Math.random()*(section.length));

    if (x%2 == 0) {

        div.style.display = 'inline';
        document.body.appendChild(div);
    } else {
        div.style.display = 'block';
        document.body.insertBefore(div, section[y]);
    }
}

var button = $('button');

button.click('click', function() {// обработка нажатия кнопки
    var div = document.createElement('div'); // создание нового div-a

    div.style.background = random_bg_color();// цвет фона
    div.style.width = random_size();//ширина
    div.style.height = random_size();//высота

    random_place(div); // расположение
});
