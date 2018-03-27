var M = require("./newModule");
var fs = require("fs");
var data = fs.readFileSync("data.txt");
var arr = data.toString().split(",");

var primeArr = [];
arr.forEach(x => {
    if (M.kiemTraNguyenTo(x)) {
        primeArr.push(x);
    }
});

fs.writeFile("./output/Bai_8.out", primeArr);