// THAM TRỊ VÀ THAM CHIẾU TRONG JS
function changeByValue(b) {
    b = 2;
}
var a = 1;
changeByValue(a);
console.log(a); // Kq là 1, nó lấy giá trị của a=1 nó truyền vào hàm, kết quả không thay đổi.


function changeByRef(obj) {
    obj.prop1 = function() {
        // do something
    };
    obj.newProp2 = {};
    obj.d = 100;
}

var c = {};
c.prop1 = {};
changeByRef(c);
console.log(c);


