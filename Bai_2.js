var fs = require("fs");
var n = 10;
var arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = 0;
}

fs.writeFile("./output/Bai_2.out", arr, "utf-8");