// Bài 38Hàm gọi lại callback
var firstFunction = function() {
    console.log("Number 1");
}

var secondFunction = function() {
    setTimeout(firstFunction, 5000);
    console.log("Number 2")
}

secondFunction();