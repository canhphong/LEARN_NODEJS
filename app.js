function sayHello() {
    console.log("Hello Node.js !");
}

sayHello();

// first class function
function logSaying(fn) {
     fn()
}

logSaying(sayHello);

// function expression
var sayGoodbye = function() {
    console.log("Say Goobye !");
    console.log("Say Goobye !");
}
sayGoodbye();

// truyển hàm trực tiếp vào logSaying luôn
logSaying(function () {
    console.log("Hello Node.js, this is expression")
})
