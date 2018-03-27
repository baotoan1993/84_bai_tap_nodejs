var M = require("./newModule");
var arr = M.readFile();

var x = 15;

function inPhanTuNhoHonX(arr, x) {
    var temp = [];
    arr.forEach(n => {
        if (n >= 1 && n <= x) {
            temp.push(n);
        }
    });
    return temp;
}

M.writeFile(24, inPhanTuNhoHonX(arr, x));