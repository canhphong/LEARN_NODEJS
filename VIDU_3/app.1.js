// Bài 31

var EventEmitter = require("events");
var util = require("util");

function Dialog() {
    EventEmitter.call(this)
    this.message = "Xin chào";
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function() {
    console.log(this.message);
    this.emit("hello")
}

var dialog = new Dialog();

dialog.on("hello", function(){
    console.log("Có 1 lời chào mới");
})

dialog.sayHello("Hoa Mai");