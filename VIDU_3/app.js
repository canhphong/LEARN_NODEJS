// Bài 30
// Object.create kế thừa từ Person

var person = {
    fName: "", 
    lName: "",
    getFullName: function(){
        return this.fName + " " + this.lName;
    }
}

var hoa = Object.create(person);
hoa.fName = "Hoa";
hoa.lName = "Mai";

var yen = Object.create(person);
yen.fName = "Yến";
yen.lName = "Pượng"

console.log(hoa.getFullName());
console.log(yen.getFullName());
