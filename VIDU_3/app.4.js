// Bài 33: Call() và Apply()
'use strict' // bắt buộc phải viết code đầy đủ, không được phép gõ tắt.

var obj = {
    name: "Mai Hoa",
    sayHello: function(param1, param2) {
        console.log(`Hello ${this.name}`);
        console.log("Params", param1, param2);
    }
}

obj.sayHello();
obj.sayHello.call( {name: "Yến Phượng"}, "Xin chào", "2017" );
obj.sayHello.apply( {name: "Yến Phượng"}, ["Xin chào", "2018"] );
// Call và Apply cho phép thay đổi ngữ cảnh của từ khóa this ở đây