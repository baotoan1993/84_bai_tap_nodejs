var fs = require("fs");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var n = 10;
var arr = [];
var min = getRandomInt(-100, 100);
var max = 100;
for (let i = 0; i < n; i++) {
    arr[i] = getRandomInt(min, max + min);
    var min = arr[i];
}

fs.writeFile("./output/Bai_4.out", arr);