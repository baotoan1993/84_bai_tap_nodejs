var M = require("./newModule");
var fs = require("fs");
var n = 15;

var data = fs.readFileSync("data.txt");
var arr = data.toString().split(",");

var primeArr = [];

arr.forEach(x => {
    if (M.kiemTraNguyenTo(x)) {
        primeArr.push(x);
    }
});

if (primeArr.length > 0) {
    fs.writeFile("./output/Bai_9.out", primeArr);
} else {
    fs.writeFile("./output/Bai_9.out", "Không có số nguyên tố nào nhỏ hơn " + n);
}