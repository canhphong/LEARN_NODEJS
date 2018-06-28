// Bài 31

var EventEmitter = require("events");
var util = require("util");

function Dialog() {
    this.message = "Xin chào";
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function(data) {
    console.log(this.message + " " + data);
    this.emit("hello", data)
}

var dialog = new Dialog();

dialog.on("hello", function(data){
    console.log("Có 1 lời chào mới", data);
})

dialog.sayHello("Hoa Mai");