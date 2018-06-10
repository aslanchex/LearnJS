function timer(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("Выполнено через " + time/1000 + " секунд");
        }, time);
    });
};

timer(6000);
