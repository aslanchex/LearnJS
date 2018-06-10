let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('show must go no');
        console.log('show me the meaning');
        resolve("result");
    }, 2000);
});

promise.then(
    function(result) {
        console.log("Fulfilled: " + result);
    })
.catch (function(error) {
        console.error("Reject: "+error);
    }
);


function goo() {
    console.log('i am go');
};

goo();
