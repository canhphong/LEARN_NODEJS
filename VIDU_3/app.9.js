// Bài 43 ES6 Typed Arrays

var buffer = new ArrayBuffer(8); // 8 byte
var view = new Int32Array(buffer);

view[0]=5;
view[1]=10;
view[2]=15; // khai báo 8 byte nne6 khi khai báo view 0 và view 1 nó chiếm hết 8 byte, lúc view ra thằng thứ 3 sẽ không hiện
console.log(view)

// Int32Array [ 5, 10 ]

