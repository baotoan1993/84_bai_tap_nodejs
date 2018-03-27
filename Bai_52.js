var M = require("./newModule");
var arr = M.readFile()
var x = 20;

function ChenXVaoDauMang(arr, x) {
    arr.unshift(x);
}

ChenXVaoDauMang(arr, x);
M.writeFile(52, arr);