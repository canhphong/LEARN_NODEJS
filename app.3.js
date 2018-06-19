function Person(name, password) {
    this.name = name;
    this.password = password
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.getPassword = function () {
    return this.password;
}

Person.prototype.getLevel = function () {
    return this.level;
}

Person.prototype.level = "admin";

function User(name) {
    this.name = name;
}

User.prototype = new Person();

var person = new Person("Tí", "123");
var user = new User("Teo", "456");

console.log(user.getName());
console.log(user.getLevel());
console.log(user.getPassword())
console.log(person.getName())


Date.prototype.vnFormat = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1; // vì tháng trong js bắt đầu từ 0
    var dd = this.getDate();

    return dd + "/" + mm + "/" + yyyy;

}

var now = new Date();
var xms = new Date(2018, 04, 12);
console.log(now.vnFormat());
console.log(xms.vnFormat());