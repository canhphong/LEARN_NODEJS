// Bài 44 Xử lý Callback trong Javascript

function readDatabase(callback) {
    var user = {
        name: "Mi Hoa",
        age: "23"
    }
    callback(user);
}

readDatabase(function(data){
    console.log("Read done callback 1")
    console.log("Tuỗi " + data.age)
})

readDatabase(function(data){
    console.log("Read done callback 2")
    console.log("Username", data.name)
})