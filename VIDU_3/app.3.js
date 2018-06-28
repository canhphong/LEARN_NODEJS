// Bài 34

var util = require("util");

function Person() {
    this.fName = "Hoa";
    this.lName = "Mai";
}

Person.prototype.sayHello = function() {
    console.log("Hello" + this.fName + " " + this.lName);
}

function Student(){
    Person.call(this);
    this.id = "1234"
}

util.inherits(Student, Person);

// tạo đối tượng sv mới
var sv = new Student();
sv.sayHello();