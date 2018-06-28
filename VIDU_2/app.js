var Emitter = require("events");
var eventConfig = require("./config").events;
var emitter = new Emitter();

emitter.on(eventConfig.BAD_SCORE, function() {
    console.log("Môn nào đó bị điểm kém")
});

emitter.on(eventConfig.BAD_SCORE, function() {
    console.log("Khi có điêm kém, cần phát thông báo tời phụ huynh")
});

// có 1 thang điểm
var scores = [10, 4];

for (var s of scores) {
    if(s < 5) {
        console.log("Điểm thấp quá", s)
        emitter.emit(eventConfig.BAD_SCORE);
    }
    // insert db
}