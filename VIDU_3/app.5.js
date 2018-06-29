// Bài 36

'use strict';

var EventEmitter = require("events");


class Dialog extends EventEmitter {
    constructor()
     super();
    this.message = "Xin chào";
}

sayHello(data) {
    console.log(`${this.message} : ${data}`);
    this.emit("hello", data);
}

var dialog = new Dialog();

dialog.on("hello", function (data) {
    console.log("Có 1 lời chào mới", data);
})

dialog.sayHello("Hoa Mai");