var timerId1 = setTimeout(function step() {
    console.log('Hello console!');
    timerId1 = setTimeout(step, 1000);
}, 2000);

// let timerId2 = setInterval(function() {
//     console.log('Hello console, i am interval!');
// }, 2000);
//
clearTimeout(timerId1);
// clearInterval(timerId2);

let fruits = ['Apple', 'Pear', 'Orange', 'Banana'];

fruits.forEach(function (value, index) {
    console.log(index, value);
});

new Promise(function(resolve, reject) {

});
