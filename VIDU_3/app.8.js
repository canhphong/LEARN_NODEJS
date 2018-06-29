// Bài 42 Xử lý dữ liệu Buffer

var buffer = new Buffer("Xin chào", "utf8");

console.log(buffer); // <Buffer 58 69 6e 20 63 68 c3 a0 6f>
console.log(buffer.toString()); // Xin chào
console.log(buffer.toString("ascii")); // Xin chC o vì bảng mã ascii không hiểu dấu huyền
console.log(buffer.toJSON());

console.log(buffer[3])

buffer.write("hoa");
console.log(buffer.toString());
