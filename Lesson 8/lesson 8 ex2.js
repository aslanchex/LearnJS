url = "https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json";
function sendAjax(url) {
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
sendAjax(url).then(response => {
    for ({name} of response) {
        console.log(name);
    };
}).catch(() => console.log('Ошибка!'));
