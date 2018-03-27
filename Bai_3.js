var fs = require("fs");
var n = 10;
var arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * -100);
    console.log(arr[i]);
}

fs.writeFile("./output/Bai_3.out", arr);